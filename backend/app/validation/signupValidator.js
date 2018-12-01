const Validator = require("validator");

module.exports.validateSignup = data => {
  errors = { code: 400 };
  return new Promise((resolve, reject) => {
    if (!Valdiator.isLength(data.username, { min: 6, max: 10 })) {
      errors.username = "Username must be between the length six and ten";
      reject(errors);
    }
    if
  });
};
