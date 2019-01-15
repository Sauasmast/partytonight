const mysql = require("./common/mysql");

module.exports.requestalldata = () => {
  return new Promise(async (resolve, reject) => {
    let queryString = "SELECT * from parties ORDER BY created_at DESC";
    try {
      const all_data = await mysql.query(queryString);
      resolve(all_data);
      console.log(all_data);
    } catch (e) {
      reject({ code: 400, message: e });
    }
  });
};

module.exports.filterdata = filterattr => {
  return new Promise(async (resolve, reject) => {
    let queryString =
      "SELECT * from parties WHERE invitation = ? ORDER BY created_at DESC";
    try {
      const all_data = await mysql.query(queryString, filterattr);
      resolve(all_data);
    } catch (e) {
      reject({ code: 400, message: e });
    }
  });
};
