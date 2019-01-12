import { GET_PARTIES } from "../actions/types";
import { GET_INDIVIDUAL_PARTY } from "../actions/types";
import { USER_PARTY } from "../actions/types";

const initstate = {};

export default function(state = initstate, action) {
  switch (action.type) {
    case GET_PARTIES:
      return {
        ...state,
        parties: action.payload
      };
    case GET_INDIVIDUAL_PARTY:
      return {
        ...state,
        indparty: action.payload
      };
    case USER_PARTY:
      return {
        ...state,
        userparty: action.payload
      };

    default:
      return state;
  }
}
