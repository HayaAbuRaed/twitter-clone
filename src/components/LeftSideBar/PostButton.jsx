import { Button } from "@mui/material";

const PostButton = () => {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        borderRadius: 10,
        minHeight: "3.059em",
        maxWidth: "13.607em",
        fontSize: "1.0625rem",
        fontWeight: 700,
        textTransform: "none",
        backgroundColor: "var(--twitter-blue-color)",
      }}
    >
      Post
    </Button>
  );
};

export default PostButton;
