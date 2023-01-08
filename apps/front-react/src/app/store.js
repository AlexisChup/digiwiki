import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import windowReducer from "../features/window/windowSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    isMobileView: windowReducer,
  },
});
