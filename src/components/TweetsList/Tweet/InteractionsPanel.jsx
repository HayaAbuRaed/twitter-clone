import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { BookmarkIcon, ShareIcon } from "./customIcons";
import { getInteractionsData } from "./utils";

const InteractionsPanel = ({ interactions }) => {
  const interactionsData = getInteractionsData(interactions);

  return (
    <Stack flexDirection="row" justifyContent="space-between" pt={1.25}>
      {interactionsData.map((interaction, index) => (
        <Stack
          key={index}
          direction="row"
          alignItems="center"
          gap={0.5}
          color="GrayText"
        >
          <IconButton sx={{ p: 0 }}>{interaction.icon}</IconButton>
          <Typography
           fontSize={"0.8rem"}
            color={interaction.count === "0" ? "transparent" : "GrayText"}
          >
            {interaction.count}
          </Typography>
        </Stack>
      ))}
      <Stack direction="row" alignItems="center" gap={0.5} maxHeight={30}>
        <BookmarkIcon />
        <ShareIcon />
      </Stack>
    </Stack>
  );
};

export default InteractionsPanel;
