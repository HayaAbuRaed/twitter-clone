import { Button } from "@mui/material";

const FollowButton = () => {
  return (
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
  );
};

export default FollowButton;
