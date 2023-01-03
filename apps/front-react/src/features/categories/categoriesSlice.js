import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, payload) => ({
      categories: payload.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
