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

  // const legacy = {
  //   name: "React",
  //   screen_name: "reactjs",
  //   statuses_count: 2670,
  //   description: "The library for web and native user interfaces",
  //   location: "San Francisco, CA",
  //   url: "react.dev",
  //   created_at: "Wed Jul 03 18:58:09 +0000 2013",
  //   followers_count: 758251,
  //   friends_count: 268,
  //   profile_banner_url:
  //     "https://pbs.twimg.com/profile_banners/1566463268/1714619053",
  //   profile_image_url_https:
  //     "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_normal.png",
  // };

  // const is_blue_verified = true;

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

      <ActivitySection />
    </Box>
  );
};

export default Profile;
