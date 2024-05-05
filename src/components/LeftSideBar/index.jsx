import DrawerList from "./DrawerList";
import { Drawer } from "./styled";
import Header from "./Header";
import PostButton from "./PostButton";
import UserSegment from "./UserSegment";

const LeftSideBar = () => {
  return (
    <Drawer sx={{ width: "259px" }} open={true}>
      <Header />

      <DrawerList />

      <PostButton />

      <UserSegment />
    </Drawer>
  );
};

export default LeftSideBar;
