import { useQuery } from "react-query";
import { useEffect } from "react";
import { getTrends } from "../API";
import { TREND_QUERY_KEY } from "../constants";

// id stands for woeid, 1 is for the global trends, 1968902 is for JO, and so on...
const useGetTrends = (id = "1") => {
  const {
    data: trends,
    isFetching,
    error,
  } = useQuery([TREND_QUERY_KEY, id], () => getTrends(id));

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.title;
      alert("Error: ", message);
    }
  }, [error]);

  return { trends, isFetching };
};

export default useGetTrends;
