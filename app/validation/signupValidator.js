const Validator = require("validator");
const { isEmpty } = require("../modules/common/isEmpty");

module.exports.validateSignup = data => {
  const re = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );

  const errors = {};

  return new Promise((resolve, reject) => {
    if (isEmpty(data.username)) {
      errors.code = 400;
      errors.username = "Username cannot be empty";
    }

    if (!Validator.isLength(data.username, { min: 6, max: 10 })) {
      errors.code = 400;
      errors.username = "Username must be between the length of six and ten";
    }

    if (isEmpty(data.email)) {
      errors.code = 400;
      errors.email = "Email cannot be empty";
    }

    if (!Validator.isEmail(data.email)) {
      errors.code = 400;
      errors.email = "Please enter a valid email address";
    }

    if (isEmpty(data.password)) {
      errors.code = 400;
      errors.password = ["Password cannot be empty"];
    }

    if (isEmpty(data.confirmPassword)) {
      errors.code = 400;
      errors.password = ["Confirm password cannot be empty"];
    }

    if (!re.test(data.password)) {
      errors.code = 400;
      errors.password = [
        "At least one upper case English letter",
        "At least one lower case English letter",
        "At least one digit",
        "At least one special character",
        "Minimum eight in length"
      ];
    }

    if (data.password !== data.confirmPassword) {
      errors.code = 400;
      errors.password = ["Both password should match today with each other"];
    }

    // if all of the condition failed it will either resolve or reject
    if (!isEmpty(errors)) {
      reject(errors);
    } else {
      resolve();
    }
  });
};
