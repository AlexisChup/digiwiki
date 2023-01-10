import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
  },
});
