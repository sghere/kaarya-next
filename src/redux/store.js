import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import apiSlice from "./slices/apiSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    api: apiSlice,
  },
});
