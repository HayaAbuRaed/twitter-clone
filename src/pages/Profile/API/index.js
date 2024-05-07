import axios from "../../../API/axios.js";

export const getProfile = async (username) => {
  try {
    const response = await axios.get(`user/details?username=${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
