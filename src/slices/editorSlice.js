import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
  name: "editorSlice",
  initialState: {
    title: "",
    body: "",
    thumbnail: "",
  },
  reducers: {
    initialize: (state, action) => editorSlice.initialState,
    changeField: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    },
  },
});

export default editorSlice;
