import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./feature/searchSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
