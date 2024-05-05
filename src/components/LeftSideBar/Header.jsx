import XIcon from "@mui/icons-material/X";
import { IconButton } from "@mui/material";
import { DrawerHeader } from "./styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <DrawerHeader>
      <IconButton
        aria-label="logo"
        size="large"
        sx={{
          px: 1.35,
          "&:hover": {
            backgroundColor: "rgba(231, 233, 234, 0.094)",
          },
        }}
        onClick={() => navigate("/")}
      >
        <XIcon sx={{ fontSize: "1.87rem", color: "rgba(231,233,234,1.00)" }} />
      </IconButton>
    </DrawerHeader>
  );
};

export default Header;
