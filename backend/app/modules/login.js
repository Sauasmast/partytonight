const mysql = require(__base + "/app/modules/common/mysql");
const bcrypt = require("bcryptjs");

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
            resolve();
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
