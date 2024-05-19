import { Box, Stack } from "@mui/material";
import React from "react";
import TrendsContainer from "../TrendsContainer";
import SearchBar from "./SearchBar/SearchBar";

const RightSideBar = () => {
  return (
    <Stack width="calc(100% - 7px)" pt={0.6} gap={1.75} position="relative">
      <SearchBar />

      <TrendsContainer />

      <Box width="100%" minHeight={80}></Box>
    </Stack>
  );
};

export default RightSideBar;
