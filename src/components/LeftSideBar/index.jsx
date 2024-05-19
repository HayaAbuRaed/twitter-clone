import { useMediaQuery } from "@mui/material";
import DrawerList from "./DrawerList";
import Header from "./Header";
import PostButton from "./PostButton";
import UserSegment from "./UserSegment";
import { LEFT_BREAKPOINT } from "./constants";
import { Drawer } from "./styled";

const LeftSideBar = () => {
  const isExpanded = !useMediaQuery(LEFT_BREAKPOINT);

  return (
    <Drawer sx={{ width: "259px", height: "100vh" }} open={isExpanded}>
      <Header />

      <DrawerList />

      <PostButton />

      <UserSegment />
    </Drawer>
  );
};

export default LeftSideBar;
