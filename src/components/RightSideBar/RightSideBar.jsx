import { Stack } from "@mui/material";
import React from "react";
import TrendsContainer from "../TrendsContainer";
import SearchBar from "./SearchBar/SearchBar";

const RightSideBar = () => {
  return (
    <Stack width="100%" pt={0.6} gap={2}>
      <SearchBar />

      <TrendsContainer />
    </Stack>
  );
};

export default RightSideBar;
