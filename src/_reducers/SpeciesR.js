import { GET_SPECIES } from "../config/constants";
import "../_actions/SpeciesA";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false
};

const SpeciesR = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SPECIES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_SPECIES}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_SPECIES}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default SpeciesR;
