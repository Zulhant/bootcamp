import axios from "axios";
import { apiUrl } from "./config_url";

export const GetToken = () => {
  const token = getItemValue("token");
  const userInfo = getItemValue("user_info");

  return {
    token,
    userInfo: JSON.parse(userInfo)
  };
};
export const axiosGenerate = async () => {
  const myAccessLogin = GetToken();

  axios.defaults.baseURL = apiUrl;
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${myAccessLogin.token}`;
  axios.defaults.headers.common["Context-Type"] = "application/json";
};

export const saveToken = async ({ token, user }) => {
  await addItemValue("token", token);
  await addItemValue("user_info", JSON.stringify(user));
};
export const removeToken = async () => {
  await removeItemValue("token");
  await removeItemValue("user_info");
};

export const converDateToTimetamps = date => {
  return Math.round(new Date(date).getTime() / 1000);
};

const removeItemValue = key => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};

const addItemValue = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (exception) {
    return false;
  }
};

const getItemValue = key => {
  try {
    return localStorage.getItem(key);
  } catch (exception) {
    return false;
  }
};
