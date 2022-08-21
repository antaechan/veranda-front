import { configureStore } from "@reduxjs/toolkit";
import menuBarSlice from "../slices/menuBarSlice";

const store = configureStore({
  reducer: {
    menuBar: menuBarSlice.reducer,
  },
});

export default store;
