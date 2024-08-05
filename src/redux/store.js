import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./mapSlice";
import balanceReducer from "./balanceSlice";

export const store = configureStore({
  reducer: {
    alliances: mapReducer,
    balance: balanceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
