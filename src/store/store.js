import { configureStore } from "@reduxjs/toolkit";
import menuBarSlice from "../slices/menuBarSlice";
import zinesSlice from "../slices/zinesSlice";
import editorSlice from "../slices/editorSlice";

const store = configureStore({
  reducer: {
    menuBar: menuBarSlice.reducer,
    zines: zinesSlice.reducer,
    editor: editorSlice.reducer,
  },
});

export default store;
