import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth";
import taskSlice from "./task";

const rootReducer = combineReducers({
  auth: authSlice,
  task: taskSlice
});

export default rootReducer;
