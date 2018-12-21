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
            resolve(result[0]);
          } else {
            reject({
              errors: { code: 400, password: "Password did not match" }
            });
          }
        });
      } else {
        reject({
          errors: {
            code: 400,
            username: "User with an email address doesnot exist"
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports.createjwttoken = data => {
  return new Promise(async (resolve, reject) => {
    payload = {
      user_id: data.user_id,
      username: data.username,
      email: data.email_address
    };
    jwt.sign(payload, config.jwt.cert, function(err, token) {
      if (err) {
        reject({ errors: { code: 500, message: "Internal server error" } });
      }
      resolve(token);
    });
  });
};
