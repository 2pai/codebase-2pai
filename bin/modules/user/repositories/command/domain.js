const command = require('./command');
const wrapper = require('../../../../helper/util/wrapper');
const jwtAuth = require('../../../../auth/jwt_auth');
const encryptUtil = require('../../../../helper/util/encrypt');
const logger = require('../../../../helper/util/logger');

class User{

  async register(payload){
    const ctx = 'domain-register';
    const passwordEncrypt = await encryptUtil.encrypt(payload.password);
    payload.password = passwordEncrypt;
    const insert = await command.insertOneUser(payload);

    if(insert.err){
      logger.log(ctx, insert.err,'insert user error');
      return wrapper.error('error',insert.err,409);
    }
    return wrapper.data(insert,'',200);
  }

  async login(payload) {
    const ctx = 'domain-login';
    const { username, password } = payload;
    const user = await command.findOneUser({ username });
    if (user.err) {
      logger.log(ctx, user.err, 'user not found');
      return wrapper.error('error', user.err, 409);
    }
    const userId = user.data._id;
    const userName = user.data.username;
    const passwordValidation = await encryptUtil.isValid(password,user.data.password);
    if (username !== userName || !passwordValidation) {
      return wrapper.error('error', 'Username or password invalid!', 409);
    }
    const data = {
      username,
      sub: userId
    };
    const token = await jwtAuth.createToken(data);
    return wrapper.data(token, '', 200);
  }
}

module.exports = User;
