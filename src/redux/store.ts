import { configureStore } from "@reduxjs/toolkit";
import tabsAndTodosReducer from "./reducers";

export const store = configureStore({
  reducer: tabsAndTodosReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
