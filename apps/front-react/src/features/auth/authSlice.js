import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken, AXIOS } from "../../app/axios-http";
import { toast } from "react-toastify";
import { verifyValidyOfJwt } from "../../common/generic/auth/AuthVerify";

const createInitialState = () => {
  const isJwtValid = verifyValidyOfJwt();

  if (isJwtValid) {
    const token = localStorage.getItem("token");
    const parsedToken = parseJwt(token);

    return {
      isAuthenticated: true,
      user: {
        email: parsedToken.email,
        roles: parsedToken.roles,
      },
    };
  } else {
    return {
      isAuthenticated: false,
      user: {
        email: "",
        roles: [],
      },
    };
  }
};

const initialState = createInitialState();

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, payload) => {
      const token = payload.payload;
      const parsedToken = parseJwt(token);

      state.isAuthenticated = true;
      state.user = {
        email: parsedToken.email,
        roles: parsedToken.roles,
      };

      setAuthToken(token);
      localStorage.setItem("token", token);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {
        email: "",
        roles: [],
      };
      setAuthToken();
      localStorage.removeItem("token");
      toast.info("Logout successfully !");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
