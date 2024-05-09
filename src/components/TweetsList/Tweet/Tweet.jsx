import PinIcon from "@mui/icons-material/PushPin";
import {
  Avatar,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ProfileName from "../../ProfileName";
import { formateDate } from "../utils";
import InteractionsPanel from "./InteractionsPanel";
import TweetBody from "./TweetBody";
import MoreIcon from "@mui/icons-material/MoreHoriz";

const Tweet = ({ tweet, isPinned, withDiv = false }) => {
  console.log("tweet", tweet);
  const {
    itemContent: {
      tweet_results: {
        result: { core, legacy, views },
      },
    },
  } = tweet;

  const { count: viewsCount } = views;

  const {
    user_results: {
      result: { legacy: userLegacy, is_blue_verified },
    },
  } = core;

  const { name, screen_name, profile_image_url_https } = userLegacy;

  const createdDate = formateDate(legacy.created_at);

  const interactions = { viewsCount, ...legacy };

  return (
    <Stack
      color="inherit"
      px={2}
      py={1.5}
      gap={1}
      sx={{
        "&:hover": {
          backgroundColor: "rgb(255, 255, 255, 0.03)",
        },
        cursor: "pointer",
      }}
    >
      {isPinned && (
        <Typography variant="body2" color="GrayText">
          <PinIcon fontSize="inherit" /> Pinned
        </Typography>
      )}

      <Stack flexDirection="row" gap={1} width="100%">
        <Stack alignItems={"center"} gap={0.5}>
          <Avatar src={profile_image_url_https} />
          {withDiv && (
            <Divider
              orientation="vertical"
              sx={{
                backgroundColor: "rgb(47, 51, 54)",
                width: "2px",
                height: "calc(100% - 24px)",
              }}
            />
          )}
        </Stack>

        <Stack gap={0.25} width="100%">
          <Stack flexDirection="row" alignItems="center" gap={0.5}>
            <ProfileName
              name={name}
              isVerified={is_blue_verified}
              size="1rem"
            />

            <Typography variant="body2" color="GrayText">
              @{screen_name} · {createdDate}
            </Typography>

            <IconButton sx={{ml: "auto", color: "inherit"}}>
              <MoreIcon fontSize="small" />
            </IconButton>
          </Stack>

          <TweetBody data={legacy} />

          <InteractionsPanel interactions={interactions} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Tweet;
