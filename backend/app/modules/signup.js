const { isEmpty } = require(__base + "/app/modules/common/isEmpty");

module.exports.init = userdata => {
  return new Promise((resolve, reject) => {
    if (
      isEmpty(userdata.username) ||
      isEmpty(userdata.password) ||
      isEmpty(userdata.email) ||
      isEmpty(userdata.confirmPassword)
    ) {
      reject({ code: 400, message: "Missing Attributes" });
    } else {
      resolve("Bhayo");
    }
  });
};
