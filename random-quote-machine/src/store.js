import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers.js";

// Create the Redux store
export const store = configureStore({
  reducer: rootReducer,
  // If any, add any middleware or enhancers here
});
