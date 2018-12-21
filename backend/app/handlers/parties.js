const party = require("../modules/parties");

module.exports.createparty = async (req, res) => {
  // validate party here
  try {
    let post_party = await party.createparty(req.body, req.payload);
    res
      .status(200)
      .send({ message: "Sucessfully added the party on your list" });
  } catch (e) {
    res.status(e.code).send({ errors: e });
  }
};

module.exports.editparty = async (req, res) => {
  data = req.body;
  //validate the incoming data party
  try {
    let party_data = await party.partyexist(data.party_id);
    let check_owner = await party.match_owner(
      party_data[0],
      req.payload.user_id
    );
    let update_party = await party.updateparty(party_data[0].party_id, data);
    res.status(200).send({ message: "Sucessfully updated the record" });
  } catch (e) {
    res.status(e.code).send({ errors: e });
  }
};

module.exports.deleteparty = async (req, res) => {
  data = req.body;
  //validate the incoming data party
  try {
    let party_data = await party.partyexist(data.party_id);
    let check_owner = await party.match_owner(
      party_data[0],
      req.payload.user_id
    );
    let delete_party = await party.deleteparty(party_data[0].party_id);
    res.status(200).send({ message: "Sucessfully deleted the record" });
  } catch (e) {
    res.status(e.code).send({ errors: e });
  }
};

module.exports.get_info_party = async (req, res) => {
  try {
    let party_data = await party.partyexist(req.params.party_id);
    res.status(200).send(party_data);
  } catch (e) {
    res.status(e.code).send({ errors: e });
  }
};
