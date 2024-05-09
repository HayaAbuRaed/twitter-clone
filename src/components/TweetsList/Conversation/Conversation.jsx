import { Stack } from "@mui/material";
import React from "react";
import Tweet from "../Tweet";

const Conversation = ({ conversation }) => {
  const {
    // content: { items },
    entryType,
  } = conversation;

  //   if (!items) return null;

  return (
    <>
      <Stack borderBottom="1px rgb(47, 51, 54) solid">
        {conversation.content.items &&
          conversation.content.items.map((tweet, index) => (
            <Tweet
              key={index}
              tweet={tweet.item}
              isPinned={entryType === "TimelineTimelineItem"}
              withDiv={index !== conversation.content.items.length - 1}
            />
          ))}
      </Stack>

      {conversation.content.entryType === "TimelineTimelineItem" && (
        <Tweet tweet={conversation.content} isPinned={false} />
      )}
    </>
  );
};

export default Conversation;
