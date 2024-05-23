import { IconButton, Stack, Typography } from "@mui/material";
import BackIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import ProfileName from "../../../components/ProfileName";

const Header = ({ name, postsCount, isVerified }) => {
  return (
    <Stack
      pr={2}
      pl={1}
      flexDirection="row"
      alignItems="center"
      gap={2.5}
      minHeight={53}
      position="sticky"
      top={0}
      zIndex={1000}
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.65)", backdropFilter: 'blur(0.63rem)'}}
    >
      {/* Back Button */}
      <IconButton
        sx={{
          color: "var(--font-default-color)",
          "&:hover": {
            backgroundColor: "rgba(231, 233, 234, 0.094)",
          },
        }}
      >
        <BackIcon />
      </IconButton>

      {/* Profile Name and #Posts*/}
      <Stack justifyContent="center">
        <ProfileName name={name} isVerified={isVerified} />

        <Typography fontSize="0.75rem" color="GrayText">
          {postsCount.toLocaleString()} posts
        </Typography>
      </Stack>

      {/* TODO: Fix to appear when the info section's disappear */}
      {/* <FollowButton /> */}
    </Stack>
  );
};

export default Header;
