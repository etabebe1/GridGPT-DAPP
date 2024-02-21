const jwt = require("jsonwebtoken");
const { errorHandler } = require("../errors/error");

const verifyToken = (req, res, next) => {
  // NOTE: the accessToken with req.cookies.accessToken is for test purpose only without using client side interface.
  // NOTE: To test Thunder-CLient, Postman or other sever-side test can be used.
  // const accessToken = req.cookies.accessToken;

  const { accessToken } = req.body;
  !accessToken && next(errorHandler(401, "Unauthorized"));

  // LOGS:

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    err && next(errorHandler(403, "Forbidden"));

    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
