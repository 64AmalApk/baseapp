import axios from "axios";
import axiosInstance from "./axiosInstance";
import { API_URL } from "../config";
const authService = {
  signIn,
  getAllTask,
};


async function signIn(data) {
  return await axiosInstance.post(API_URL.SIGN_IN, data);
}
async function getAllTask() {
  return await axiosInstance.get(API_URL.TASK_LIST);
}





export default authService;