const data = (data, description = '', code ) => ({ error : null,code, message:description,data});

const error = (error, description = '', code ) => ({error,code,message:description});

module.exports = {
    data,
    error
}