import { TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTabList = styled(TabList)(({ theme }) => ({
  "& .css-1aquho2-MuiTabs-indicator": {
    maxWidth: 55,
    width: "100%",
    height: 4,
    borderRadius: 4,
    backgroundColor: "var(--twitter-blue-color)",
    marginLeft: "2.925rem",
  },
  "& .css-ax5fwm-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: "var(--font-default-color)",
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  color: "GrayText",
  textTransform: "none",
  fontWeight: 700,
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "rgba(231, 233, 234, 0.08)",
  },
}));
