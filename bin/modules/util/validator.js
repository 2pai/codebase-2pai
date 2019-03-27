const joi = require('joi');
const validate = require('validate.js');
const wrapper = require('../../helper/util/wrapper');

const isValidPayload = (payload, constraint) => {
  const { error } = joi.validate(payload, constraint);
  if(!validate.isEmpty(error)){
    return wrapper.error('fail', error, 409);
  }
  return wrapper.data('success', 'valid param', 200);

};

module.exports = {
  isValidPayload
};
