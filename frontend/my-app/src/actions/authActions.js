import { GET_ERRORS } from "./types";
import { SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/auth/signup", userData)
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login - User =
export const loginuser = userData => dispatch => {
  axios
    .post("/auth/login", userData)
    .then(res => {
      //Save to local storage
      const { token } = res.data;
      // Set token to local Storage
      localStorage.setItem("jwtToken", token);
      //authHeader
      setAuthToken(token);
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log(err.response.data.errors);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      });
    });
};

//Set Loggedin user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
