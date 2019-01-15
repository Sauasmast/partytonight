import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "../reducers/index";

const middleware = [thunk];
const initstate = {};

const store = createStore(
  rootreducer,
  initstate,
  compose(applyMiddleware(...middleware))
);

export default store;
