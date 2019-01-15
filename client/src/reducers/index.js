import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import partiesReducer from "./partiesReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  parties: partiesReducer
});
