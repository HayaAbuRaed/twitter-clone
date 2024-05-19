import { CssBaseline, ThemeProvider } from "@mui/material";
import twitterTheme from "./twitterTheme";

const TwitterThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={twitterTheme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default TwitterThemeProvider;
