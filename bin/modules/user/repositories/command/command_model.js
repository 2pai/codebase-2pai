const joi = require('joi');

const user = joi.object({
  username:joi.string().required(),
  password:joi.string().required()
});

module.exports = {
  user
};
