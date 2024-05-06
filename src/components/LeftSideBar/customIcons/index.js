import CustomIcon from "./CustomIcon";
import pathDs from "./pathDs";

const {
  home,
  explore,
  notifications,
  messages,
  bookmarks,
  lists,
  communities,
  profile,
  more,
  post,
} = pathDs;

export const HomeIcon = () => <CustomIcon pathFactor={home} />;

export const ExploreIcon = () => <CustomIcon pathFactor={explore} />;

export const NotificationsIcon = () => (
  <CustomIcon pathFactor={notifications} />
);

export const MessagesIcon = () => <CustomIcon pathFactor={messages} />;

export const BookmarksIcon = () => <CustomIcon pathFactor={bookmarks} />;

export const ListsIcon = () => <CustomIcon pathFactor={lists} />;

export const CommunitiesIcon = () => <CustomIcon pathFactor={communities} />;

export const ProfileIcon = () => <CustomIcon pathFactor={profile} />;

export const MoreIcon = () => <CustomIcon pathFactor={more} />;

export const PostIcon = () => <CustomIcon pathFactor={post} />;
