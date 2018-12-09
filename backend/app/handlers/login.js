const login = require(__base + "/app/modules/login");

module.exports.logging_in = async (req, res) => {
  data = req.body;
  try {
    // authenticate not using passport
    let authenticate = await login.authenticate(data);
    let jwttoken = await login.createjwttoken(authenticate);
    res.send({ code: 200, token: jwttoken });
  } catch (e) {
    res.send(e);
  }
};
