const mysql = require(__base + "/app/modules/common/mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require(__base + "/app/config/config");

module.exports.authenticate = userdata => {
  return new Promise(async (resolve, reject) => {
    try {
      queryString = "SELECT * FROM users WHERE username=?";
      let result = await mysql.query(queryString, userdata.username);
      console.log(result);
      if (result.length == 1) {
        bcrypt.compare(userdata.password, result[0].password, (err, res) => {
          console.log(res);
          if (err) {
            reject(err);
          }
          if (res) {
            resolve(result[0].user_id);
          } else {
            reject({
              errors: { code: 400, message: "Password did not match" }
            });
          }
        });
      } else {
        reject({
          errors: {
            code: 400,
            message: "User with an email address doesnot exist"
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports.createjwttoken = id => {
  return new Promise(async (resolve, reject) => {
    payload = { user_id: id };
    jwt.sign(payload, config.jwt.cert, function(err, token) {
      if (err) {
        reject({ errors: { code: 500, message: "Internal server error" } });
      }
      resolve(token);
    });
  });
};
