import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers";

const store = configureStore({
  reducer: {
    userAuth: userReducer,
  },
});

export default store;
