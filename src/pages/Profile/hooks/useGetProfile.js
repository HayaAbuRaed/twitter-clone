import { useQuery } from "react-query";
import { getProfile } from "../API";
import { PROFILE_QUERY_KEY } from "../constants";
import { useEffect } from "react";

const useGetProfile = (username) => {
  const {
    data: profile,
    isFetching,
    error,
  } = useQuery([PROFILE_QUERY_KEY, username], () => getProfile(username));

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.title;
      alert("Error: ", message);
    }
  }, [error]);

  return { profile, isFetching };
};

export default useGetProfile;
