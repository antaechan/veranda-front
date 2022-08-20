import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { category: "Veranda Works" },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default categorySlice;
