import React from "react";
import { API } from "../config/api";
import { LOGIN } from "../config/varconst";
import "../_actions/LoginA";
import { Redirect } from "react-router-dom";

// Setup Reducer for Redux
const initialState = {
  data: [],
  authenticated: false,
  isLoading: false,
  error: null
};

const LoginR = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
      return {
        ...state
      };
    case `${LOGIN}_FULFILLED`:
      window.localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        authenticated: true
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        error: true
      };
    default:
      return state;
  }
};

export default LoginR;
