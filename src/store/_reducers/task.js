import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingTask: [],
  verificationTask: [], 
  draftTask: [],
  timestamp: new Date().getTime(),
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setPendingTasks: (state, action) => {
      state.pendingTask = action.payload;
    },
    setVerificationTasks: (state, action) => {
      state.verificationTask = action.payload;
    },
    setDraftTasks: (state, action) => {
      state.draftTask = action.payload;
    },
    clearTasks: (state) => {
      state.pendingTask = [];
      state.verificationTask = [];
      state.draftTask = [];
    }
  },
});

export const { setPendingTasks, setVerificationTasks, setDraftTasks, clearTasks } = taskSlice.actions;
export const getTasks = (state) => state?.task;
export const getPendingTasks = (state) => state?.task?.pendingTask;
export const getVerificationTasks = (state) => state?.task?.verificationTask;
export default taskSlice.reducer;
