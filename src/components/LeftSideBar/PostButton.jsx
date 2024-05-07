import { Button, IconButton, useMediaQuery } from "@mui/material";
import { LEFT_BREAKPOINT } from "./constants";
import { PostIcon } from "./customIcons";

const buttonBackground = {
  backgroundColor: "var(--twitter-blue-color)",
  "&:hover": {
    backgroundColor: "rgb(26, 142, 219)",
  }
};

const PostButton = () => {
  const isExpanded = !useMediaQuery(LEFT_BREAKPOINT);

  return (
    <>
      {isExpanded && (
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
            ...buttonBackground,
          }}
        >
          Post
        </Button>
      )}
      {!isExpanded && (
        <IconButton
          sx={{
            width: "3.125rem",
            height: "3.125",
            pt: 1.5,
            ...buttonBackground,
          }}
        >
          <PostIcon />
        </IconButton>
      )}
    </>
  );
};

export default PostButton;
