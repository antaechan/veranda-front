import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./../slices/categorySlice";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
});

export default store;
