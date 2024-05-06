import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import LEFT_LEST, { LEFT_BREAKPOINT } from "./constants";

const DrawerList = () => {
  const isExpanded = !useMediaQuery(LEFT_BREAKPOINT);

  return (
    <List
      disablePadding
      sx={{ display: "flex", flexDirection: "column", gap: 0.04 }}
    >
      {LEFT_LEST &&
        LEFT_LEST.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ maxHeight: "3.14em" }}>
            <ListItemButton
              sx={{
                justifyContent: "initial",
                gap: "1.2rem",
                py: 1,
                px: 1.5,
                borderRadius: 10,
                width: "fit-content",
                minWidth: 0,
                maxWidth: "fit-content",
                "&:hover": {
                  backgroundColor: "rgba(231, 233, 234, 0.094)",
                },
                transition: "background-color 0.2s",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>

              {isExpanded && (
                <ListItemText primary={item.text} sx={{ m: 0, pb: 0.4 }} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
};

export default DrawerList;
