const User = require('./domain');

const login = async (payload)=>{
  const user = new User();
  const postCommand = async payload => user.login(payload);
  return postCommand(payload);
};

const register = async (payload)=>{
  const user = new User();
  const postCommand = async payload => user.register(payload);
  return postCommand(payload);
};

module.exports = {
  login,
  register
};
