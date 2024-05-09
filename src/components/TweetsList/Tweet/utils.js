import { formatNumber } from "../../../utils";
import { LikeIcon, ReplyIcon, RetweetIcon, ViewIcon } from "./customIcons";

export const getInteractionsData = (interactions) => {
  const { reply_count, retweet_count, favorite_count, viewsCount } =
    interactions;
  return [
    {
      icon: <ReplyIcon sx={{ "& :hover": { color: "rgb(29, 155, 240)" } }} />,
      count: formatNumber(reply_count),
      color: "rgb(29, 155, 240)",
    },
    {
      icon: <RetweetIcon />,
      count: formatNumber(retweet_count),
      color: "rgb(9, 181, 124)",
    },
    {
      icon: <LikeIcon />,
      count: formatNumber(favorite_count),
      color: "rgb(249, 24, 128)",
    },
    {
      icon: <ViewIcon />,
      count: formatNumber(viewsCount),
      color: "rgb(29, 155, 240)",
    },
  ];
};

const replaceUrlsWithLinks = (text, urls) => {
  let newText = text;
  urls.forEach((url) => {
    newText = newText.replace(
      url.url,
      `<a href="${url.url}" target="_blank" style={{color: "red"}}>${url.display_url}</a>`
    );
  });
  return newText;
};

// Function to render user mentions
const renderUserMentions = (text, userMentions) => {
  let newText = text;
  userMentions.forEach((mention) => {
    newText = newText.replace(
      `@${mention.screen_name}`,
      `<a href="/${mention.screen_name}">@${mention.screen_name}</a>`
    );
  });
  return newText;
};

export const formatBody = (data) => {
  const { entities, full_text: fullText } = data;

  const { user_mentions: userMentions, urls } = entities;

  let renderedText = fullText.replace(/\n/g, "<br />");
  renderedText = replaceUrlsWithLinks(renderedText, urls);
  renderedText = renderUserMentions(renderedText, userMentions);
  return { __html: renderedText };
};
