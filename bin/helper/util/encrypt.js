const bcrypt = require('bcrypt');

const encrypt = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

const isValid = (password, encodedPassword) => {
  return bcrypt.compareSync(password, encodedPassword);
};

module.exports = {
  encrypt,
  isValid
};
