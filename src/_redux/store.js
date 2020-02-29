import { createStore, combineReducers, applyMiddleware } from "redux";

import LoginR from "../_reducers/LoginR";
import RegisterR from "../_reducers/RegisterR";
// import SpeciesR from "../_reducers/SpeciesR";

import { logger, promise } from "../styles/mw";

// Global state
const rootReducers = combineReducers({
  LoginR,
  RegisterR
  //   SpeciesR
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
