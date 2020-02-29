import { REGISTER } from "../config/varconst";
import "../_actions/RegisterA";

// Setup Reducer for Redux
const initialState = {
  data: [],
  authenticated: false,
  loading: false,
  error: null
};

const RegisterR = (state = initialState, action) => {
  switch (action.type) {
    case `${REGISTER}_PENDING`:
      return {
        ...state
      };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        authenticated: true
      };
    case `${REGISTER}_REJECTED`:
      return {
        ...state,
        loading: false,
        authenticated: false,
        error: true
      };
    default:
      return state;
  }
};

export default RegisterR;
