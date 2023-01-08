import { createSlice } from "@reduxjs/toolkit";

const initialState = window.innerWidth < 767;

export const windowSlice = createSlice({
  name: "isMobileView",
  initialState,
  reducers: {
    setIsMobileView: (state, payload) => {
      console.log("setIsMobileView call: ", payload);
      return {
        isMobileView: payload.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsMobileView } = windowSlice.actions;

export default windowSlice.reducer;
