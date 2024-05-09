import CustomIcon from "../../../CustomIcon";
import pathDs from "./pathDs";

const { reply, retweet, like, view, bookmark, share } = pathDs;

export const ReplyIcon = () => (
  <CustomIcon pathFactor={reply} color="GrayText" dim="1.125rem" />
);

export const RetweetIcon = () => (
  <CustomIcon pathFactor={retweet} color="GrayText" dim="1.125rem" />
);

export const LikeIcon = () => (
  <CustomIcon pathFactor={like} color="GrayText" dim="1.125rem" />
);

export const ViewIcon = () => (
  <CustomIcon pathFactor={view} color="GrayText" dim="1.125rem" />
);

export const BookmarkIcon = () => (
  <CustomIcon
    pathFactor={bookmark}
    color="GrayText"
    dim="1.125rem"
    viewBox="0 0 24 19"
  />
);

export const ShareIcon = () => (
  <CustomIcon
    pathFactor={share}
    color="GrayText"
    dim="1.125rem"
    viewBox="0 0 24 19"
  />
);
