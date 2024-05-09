import { useEffect } from "react";
import { useQuery } from "react-query";
import { getProfileTweets } from "../API";
import { PROFILE_TWEETS_QUERY_KEY } from "../constants";

const useGetProfileTweets = (username) => {
  const { data, isFetching, error } = useQuery(
    [PROFILE_TWEETS_QUERY_KEY, username],
    () => getProfileTweets(username)
  );

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.title;
      alert("Error: ", message);
    }
  }, [error]);

  return {
    data,
    isFetching,
  };
};

export default useGetProfileTweets;
