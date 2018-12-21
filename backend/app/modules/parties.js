const mysql = require("./common/mysql");
const uuidv4 = require("uuid/v4");

module.exports.createparty = (party_data, user_data) => {
  console.log("UUID: " + uuidv4());
  return new Promise(async (resolve, reject) => {
    party_data.party_id = uuidv4();
    party_data.user_id = user_data.user_id;
    queryString = "INSERT INTO parties SET ?";
    try {
      let inserted_data = await mysql.query(queryString, party_data);
      console.log(inserted_data);
      resolve(inserted_data);
    } catch (e) {
      reject({ code: 500, message: e });
    }
  });
};

module.exports.partyexist = party_id => {
  return new Promise(async (resolve, reject) => {
    queryString = "SELECT * FROM parties WHERE party_id = ?";
    try {
      let party_data = await mysql.query(queryString, party_id);
      if (party_data.length == 1) {
        resolve(party_data);
      } else if (party_data.length == 0) {
        reject({ code: 403, message: "Party does not exists at all." });
      } else {
        reject({ code: 500 });
      }
    } catch (e) {
      reject({ code: 500, message: e });
    }
  });
};

module.exports.match_owner = (party_data, owner) => {
  console.log(party_data.user_id);
  console.log("owner" + owner);
  return new Promise((resolve, reject) => {
    if (party_data.user_id == owner) {
      resolve();
    } else {
      reject({
        code: 403,
        message: "Your are not authorized to delete the party"
      });
    }
  });
};

module.exports.updateparty = (party_id, data) => {
  return new Promise(async (resolve, reject) => {
    queryString = "UPDATE parties SET ? WHERE party_id = ?";
    try {
      let inserted_data = await mysql.query(queryString, [data, party_id]);
      resolve(inserted_data);
    } catch (e) {
      console.log(e);
      reject({ code: 500, message: e });
    }
  });
};

module.exports.deleteparty = party_id => {
  return new Promise(async (resolve, reject) => {
    queryString = "DELETE FROM parties WHERE party_id = ?";
    try {
      let deleted_data = await mysql.query(queryString, party_id);
      console.log(deleted_data[0].affectedRows);
      resolve();
    } catch (e) {
      console.log(e);
      reject({ code: 500, message: e });
    }
  });
};
