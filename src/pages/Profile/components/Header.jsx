import { Button, IconButton, Stack, Typography } from "@mui/material";
import BackIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const Header = ({ name, postsCount }) => {
  return (
    <Stack
      px={2}
      flexDirection="row"
      alignItems="center"
      gap={1}
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
      minHeight={53}
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
        <Typography fontSize="1.25rem" variant="h3">
          {name}
        </Typography>
        <Typography fontSize="0.75rem" color="GrayText">
          {postsCount} posts
        </Typography>
      </Stack>

      {/* Follow Button */}
      <Button
        variant="contained"
        sx={{
          ml: "auto",
          height: "fit-content",
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 10,
          px: 2.5,
          backgroundColor: "#eff3f4",
          color: "var(--font-default-black-color)",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "rgb(215, 219, 220)",
            boxShadow: "none",
          },
        }}
      >
        Follow
      </Button>
    </Stack>
  );
};

export default Header;
