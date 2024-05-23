import { createTheme } from "@mui/material";
import twitterMixins from "./mixins";

const twitterTheme = createTheme({
  mixins: twitterMixins,
  palette: {
    primary: {
      main: "#1da1f2",
    },
    secondary: {
      main: "#fff",
    },
  },
  background: {
    default: "#000",
  },
});

export default twitterTheme;
