import { REGISTER } from "../config/varconst";
import axios from "axios";

export const RegisterA = data => {
  return {
    type: REGISTER,
    payload: axios({
      method: "POST",
      url: "http://localhost:5000/api/v1/register",
      data
    })
  };
};
