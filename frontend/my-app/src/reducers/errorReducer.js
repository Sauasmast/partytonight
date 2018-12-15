import { GET_ERRORS } from "../actions/types";

const initstate = {};

export default function(state = initstate, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
