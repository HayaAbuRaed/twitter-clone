import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      pt={1}
    >
      <CircularProgress size={30} sx={{ color: "#f5f5f5" }} />
    </Stack>
  );
};

export default Loader;
