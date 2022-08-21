import { createSlice } from "@reduxjs/toolkit";

const menuBarSlice = createSlice({
  name: "menuBar",
  initialState: { category: "Veranda Works", isRightBarClicked: false },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setRightBarClicked: (state, action) => {
      state.isRightBarClicked = action.payload;
    },
  },
});

export default menuBarSlice;
