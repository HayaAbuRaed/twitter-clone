import axios from "../../../API/axios";

export const getTrends = async (id) => {
  try {
    const response = await axios.get(`/trends/?woeid=${id}`);
    return response.data[0].trends;
  } catch (error) {
    console.error(error);
  }
};
