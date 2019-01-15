import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/isEmpty";

const initstate = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initstate, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
