const login = require(__base + "/app/modules/login");

module.exports.logging_in = async (req, res) => {
  data = req.body;
  try {
    // authenticate not using passport
    let authenticate = await login.authenticate(data);
    res.send({ code: 200, message: "User is authenticated" });
  } catch (e) {
    res.send(e);
  }
};
