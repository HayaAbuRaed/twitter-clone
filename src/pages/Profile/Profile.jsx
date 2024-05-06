import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection/InfoSection";
import ActivitySection from "./components/ActivitySection/ActivitySection";

const Profile = () => {
  // get the param value:
  const { username } = useParams();

  return (
    <Box>
      Welcome to {username} profile
      
      <Header />

      <InfoSection />
      
      <ActivitySection />
    </Box>
  );
};

export default Profile;
