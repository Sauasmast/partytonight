import axios from "axios";
import { GET_PARTIES } from "./types";
import { GET_ERRORS } from "./types";
import { GET_INDIVIDUAL_PARTY } from "./types";
import { USER_PARTY } from "./types";

export const party = () => dispatch => {
  axios
    .get("/party/getparty")
    .then(response => {
      dispatch({
        type: GET_PARTIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const getindividualparty = partyid => dispatch => {
  axios
    .get("/party/getparty/" + partyid)
    .then(response => {
      dispatch({
        type: GET_INDIVIDUAL_PARTY,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const myparties = user_id => dispatch => {
  axios
    .get("/party/getuserparty")
    .then(response => {
      dispatch({
        type: USER_PARTY,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
