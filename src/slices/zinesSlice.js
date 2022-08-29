import { createSlice } from "@reduxjs/toolkit";

const zinesSlice = createSlice({
  name: "zines",
  initialState: { zines: [], pageNumber: 1, numberOfZinesInPage: 12 },
  reducers: {
    setZines: (state, action) => {
      state.zines = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export default zinesSlice;
