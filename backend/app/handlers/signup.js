const signup = require(__base + "/app/modules/signup");
const { validateSignup } = require(__base + "/app/validation/signupValidator");

module.exports.signingup = async (req, res) => {
  try {
    data = req.body;
    let initlocal = await signup.init(data);
    let validation = await validateSignup(data);
  } catch (e) {
    res.send({ error: { code: e.code, message: e.message } });
  }
};
