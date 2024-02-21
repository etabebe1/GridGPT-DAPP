const errorHandler = (_statusCode, _message) => {
  const error = new Error();
  error.statusCode = _statusCode;
  error.message = _message;
  return error;
};

module.exports = { errorHandler };
