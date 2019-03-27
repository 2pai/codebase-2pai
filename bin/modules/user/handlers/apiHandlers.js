const wrapper = require('../../../helper/util/wrapper');
const commandHandler = require('../repositories/command/command_handler');
const commandModel = require('../repositories/command/command_model');
const queryHandler = require('../repositories/queries/query_handler');
const validator = require('../../util/validator');

const login = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, commandModel.user);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    return commandHandler.login(payload);
  };
  const sendResponse = async (result) => {
    /* eslint no-unused-expressions: [2, { allowTernary: true }] */
    (result.err) ? wrapper.response(res, 'fail', result)
      : wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validatePayload));
};

const register = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, commandModel.user);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    return commandHandler.register(payload);
  };
  const sendResponse = async (result) => {
    /* eslint no-unused-expressions: [2, { allowTernary: true }] */
    (result.err) ? wrapper.response(res, 'fail', result)
      : wrapper.response(res, 'success', result, 'Your Request Has Been Processed');
  };
  sendResponse(await postRequest(validatePayload));
};

module.exports = {
  login,
  register
};
