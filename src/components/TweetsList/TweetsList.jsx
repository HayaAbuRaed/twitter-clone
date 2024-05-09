import { Stack } from "@mui/material";
import React from "react";
import Tweet from "./Tweet";
import Conversation from "./Conversation";

const TweetsList = ({ tweets, pinned = false }) => {
  return (
    <>
      {pinned && (
        <Stack borderBottom="1px rgb(47, 51, 54) solid">
          {tweets.map((tweet, index) => (
            <Tweet key={index} tweet={tweet.content} isPinned={pinned} />
          ))}
        </Stack>
      )}

      {!pinned && (
        <Stack>
          {tweets.map((tweet) => (
            <Conversation key={tweet.entryId} conversation={tweet} />
          ))}
        </Stack>
      )}
    </>
  );
};

export default TweetsList;
