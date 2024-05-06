import axios from "axios";

const defaultAxiosSettings = {
  // headers: {
  //   "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Key,
  //   "X-RapidAPI-Host": process.env.REACT_APP_RapidAPI_Host,
  // },
  headers: {
    "X-RapidAPI-Key": "7acf0f5aecmshdeac84a248f00afp1f34dejsn6a06da7c5f07",
    "X-RapidAPI-Host": "twitter-v24.p.rapidapi.com",
  },
};

const axiosTwitter = axios.create({
  baseURL: "https://twitter-v24.p.rapidapi.com",
  ...defaultAxiosSettings,
});

export default axiosTwitter;
