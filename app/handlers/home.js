const home = require("../modules/home");

module.exports.displayhome = async (req, res) => {
  try {
    let data = await home.requestalldata();
    res.status(200).send(data);
  } catch (e) {
    res.status(e.code).send({ code: e.code, message: e.message });
  }
};

module.exports.filterdata = async (req, res) => {
  data = req.body;
  try {
    let filtered_data = await home.filterdata(data.filter_by);
    res.status(200).send(filtered_data);
  } catch (e) {
    res.status(e.code).send({ code: e.code, message: e.message });
  }
};
