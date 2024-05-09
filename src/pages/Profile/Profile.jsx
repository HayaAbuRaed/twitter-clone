import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ActivitySection from "./components/ActivitySection";
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
        result: { is_blue_verified, legacy },
      },
    },
  } = profile;

  const data = { ...legacy, is_blue_verified };

  const { name, statuses_count } = legacy;

  return (
    <Box>
      <Header
        name={name}
        postsCount={statuses_count}
        isVerified={is_blue_verified}
      />

      <InfoSection data={data} />

      <ActivitySection username={username} />
    </Box>
  );
};

export default Profile;
