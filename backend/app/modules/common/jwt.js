const config = require(__base + "/app/config/config");
const jwt = require("jsonwebtoken");

module.exports.checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (header) {
    jwt.verify(header, config.jwt.cert, function(err, decoded) {
      if (err) {
        res.sendStatus(403);
      } else {
        req.payload = decoded;
        next();
      }
    });
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};
