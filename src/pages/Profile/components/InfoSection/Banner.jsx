import { Avatar, IconButton, Stack } from "@mui/material";
import FollowButton from "../FollowButton";
import MoreIcon from "@mui/icons-material/MoreHoriz";

const Banner = ({ coverPic, profilePic }) => {
  return (
    <Stack position="relative">
      {/* <img src={coverPic} alt="cover" /> */}

      <Stack
        sx={{ backgroundImage: `url(${coverPic})`, backgroundSize: "cover" }}
        width="100%"
        minHeight="199.47px"
      ></Stack>

      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        minHeight="4.13rem"
        px={2}
        py={1.5}
      >
        <Avatar
          src={profilePic}
          sx={{
            width: "8.35rem",
            height: "8.35rem",
            border: "4px black solid",
            position: "absolute",
            top: "calc(199.47px - 4.18rem)",
          }}
        />

        <Stack flexDirection="row" gap={1} ml="auto">
          <IconButton
            sx={{
              color: "var(--font-default-color)",
              border: "1px GrayText solid",
              padding: "0.32rem",
            }}
          >
            <MoreIcon />
          </IconButton>

          <FollowButton />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Banner;
