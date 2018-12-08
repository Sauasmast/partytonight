const bcrypt = require("bcryptjs");
const { isEmpty } = require(__base + "/app/modules/common/isEmpty");
const mysqlConnection = require(__base + "/app/modules/common/mysql");

module.exports.duplicate_check = userdata => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await mysqlConnection.query(
        "Select * from users where email_address=?",
        userdata.email
      );
      if (result.length !== 0) {
        reject({
          errors: { code: 400, message: "Email Address already exist." }
        });
      }
      let result2 = await mysqlConnection.query(
        "Select * from users where username=?",
        data.username
      );
      if (result2.length !== 0) {
        reject({
          errors: {
            code: 400,
            message: " A user with a useranme already exist."
          }
        });
      }
      resolve();
    } catch (e) {
      reject({ errors: { code: 500, message: "Internal server error" } });
    }
  });
};

module.exports.hash_password = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) {
          reject({ errors: { code: 500, message: "Internal server error" } });
        }
        resolve(hash);
      });
    });
  });
};

module.exports.insert_user = (userdata, hashpassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await mysqlConnection.query(
        "INSERT INTO users (username, email_address, password) VALUES (?,?,?)",
        [userdata.username, userdata.email, hashpassword]
      );
      if (result.affectedRows !== 1) {
        reject({ error: { code: 500, message: "Internal server error" } });
      }
      resolve();
    } catch (e) {
      console.log(e);
      reject({ errors: { code: 500, message: "Internal server error" } });
    }
  });
};
