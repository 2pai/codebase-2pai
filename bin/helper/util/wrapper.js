const data = (data, description = '', code = 200) => ({ error : null,code, message:description, data});

const error = (error, description = '', code ) => ({error,code,message:description});

const response = (res, type, result, message, code) => {
    /* eslint no-param-reassign: 2 */
    if (message) result.message = message;
    if (code) result.code = code;
    let status;

    switch (type) {
    case 'fail':
      status = false;
      break;
    case 'success':
      status = true;
      break;
    default:
      status = true;
      break;
    }
    res.status(result.code).send(
      {
        success: status,
        data: result.data,
        message: result.message,
        code: result.code
      });
  };

module.exports = {
    data,
    error,
    response
}