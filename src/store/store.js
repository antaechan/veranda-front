import { configureStore } from "@reduxjs/toolkit";
import menuBarSlice from "../slices/menuBarSlice";
import editorSlice from "../slices/editorSlice";

const store = configureStore({
  reducer: {
    menuBar: menuBarSlice.reducer,
    editor: editorSlice.reducer,
  },
});

export default store;
