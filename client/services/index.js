import Axios from "axios";

export const API = Axios.create({
  baseURL: process.env.SERVER_URL,
});
