import { configureStore } from "@reduxjs/toolkit";
import menuBarSlice from "../slices/menuBarSlice";
import zinesSlice from "../slices/zinesSlice";

const store = configureStore({
  reducer: {
    menuBar: menuBarSlice.reducer,
    zines: zinesSlice.reducer,
  },
});

export default store;
