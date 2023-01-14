import axios from "axios";

const AXIOS = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "DEV"
      ? "http://localhost:8080/api"
      : "https://dw-back.herokuapp.com/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: ``,
  },
});

export const setAuthToken = (token) => {
  if (token) {
    AXIOS.defaults.headers["Authorization"] = `Bearer ${token}`;
  } else delete AXIOS.defaults.headers["Authorization"];
};

export { AXIOS };
