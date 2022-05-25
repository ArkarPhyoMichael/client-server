import axios from "axios";
// import { logOut } from "./services";

export default function apiCall() {
  const apiCall = axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    withCredentials: true,
  });

  apiCall.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        // logOut();

        return Promise.reject();
      }

      return Promise.reject(error);
    }
  );
  return apiCall;
}
