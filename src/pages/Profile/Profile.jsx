import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ActivitySection from "./components/ActivitySection/ActivitySection";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection/InfoSection";
import useGetProfile from "./hooks/useGetProfile";

const Profile = () => {
  const { username } = useParams();

  const { profile, isFetching } = useGetProfile(username);

  if (isFetching) return <Box>Loading...</Box>;

  const {
    data: {
      user: {
        result: { legacy },
      },
    },
  } = profile;

  const { name, statuses_count } = legacy;

  console.log("name", name);

  return (
    <Box>
      <Header name={name} postsCount={statuses_count} />

      <InfoSection />

      <ActivitySection />
    </Box>
  );
};

export default Profile;
