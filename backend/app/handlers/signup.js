const signup = require(__base + "/app/modules/signup");
const { validateSignup } = require(__base + "/app/validation/signupValidator");

module.exports.signingup = async (req, res) => {
  data = req.body;
  try {
    let validation = await validateSignup(data);
    let result = await signup.duplicate_check(data);
    let hashing = await signup.hash_password(data.password);
    let insert_user = await signup.insert_user(data, hashing);
    res.send({
      code: 200,
      message: "User sucessfully added"
    });
  } catch (e) {
    res.status(400).send(e);
  }
};
