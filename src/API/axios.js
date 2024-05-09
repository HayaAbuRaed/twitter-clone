import axios from "axios";

const defaultAxiosSettings = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Key,
    "X-RapidAPI-Host": process.env.REACT_APP_RapidAPI_Host,
  },
};

const axiosTwitter = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  ...defaultAxiosSettings,
});

export default axiosTwitter;
