import axios from "axios";
import axiosInstance from "./axiosInstance";
import { API_URL } from "../config";
const authService = {
  signIn,
  signUp,
};


async function signIn(data) {
  return await axiosInstance.post(API_URL.SIGN_IN, data);
}
async function signUp(data) {
  return await axiosInstance.post(API_URL.AUTH + API_URL.SIGN_UP, data);
}





export default authService;