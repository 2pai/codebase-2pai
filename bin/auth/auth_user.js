const cfg = require('../config/globalConfig');
class User{
  constructor(uname,pass){
    this.username = uname;
    this.password = pass;
  }
  isValidPassword(pass) {
    return this.password === pass;
  }
}

module.exports.findByUser = (username , callback ) => {
  const auth = [{username : cfg.getBasicAuthUsername(), password: cfg.getBasicAuthPassword()}];
  let dataUser;

  dataUser = auth.map((val) => {
    if(val.username === username){
      return val;
    }
    return '';
  });
  const user = new User(dataUser[0].username,dataUser[0].password);
  callback(user);
};
