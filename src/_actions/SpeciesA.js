import { API } from "../config/api";
import { GET_SPECIES } from "../config/varconst";
import axios from "axios";

export const getSpecies = data => {
  return {
    type: GET_SPECIES,
    payload: axios({
      method: "GET",
      url: "http://localhost:5000/api/v1/species",
      data
    })
  };
};
