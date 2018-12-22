const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const User = require('./auth_user');

passport.use(new BasicStrategy(
  (username,password,callback) => {
    User.findByUser(username,(user) => {
      if(!user) return callback(null,false);
      if(!user.isValidPassword(password)) return callback(null,false);
      return callback(null,user);
    });
  }));

const isAuth = passport.authenticate('basic',{session: false });
const init = () => passport.initialize();

module.exports = {
  isAuth,
  init
};
