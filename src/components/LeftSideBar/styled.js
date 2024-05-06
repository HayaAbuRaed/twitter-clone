import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { closedMixin, openedMixin } from "./utils";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0.1, 0, 0, 0),
}));

export const Drawer = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: "259px",
  height: "calc(100vh - 0.8px)",
  flexShrink: 0,
  flexDirection: "column",
  whiteSpace: "nowrap",
  fontFamily: "TwitterChirp",
  gap: "0.35rem",

  "& .css-10hburv-MuiTypography-root ": {
    fontFamily: "TwitterChirp",
    fontSize: "1.28rem",
  },

  alignItems: open ? "flex-start" : "center",

  ...(open && {
    ...openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
  }),
}));
