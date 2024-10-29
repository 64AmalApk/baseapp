import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  email: "",
  user: {},
  _id: "",
  token: "",
  timestamp: new Date().getTime(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.email = action.payload.data.email;
      state.user = action.payload.data
      state._id = action.payload.data._id;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
      state.token = "";
      state.role = "";
      state._id = "";
      state.email = "";
    },

  },
});
export const { login, logout } = authSlice.actions;
export const getAuth = (state) => state?.auth;
export default authSlice.reducer;
