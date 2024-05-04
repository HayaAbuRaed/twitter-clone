import { Grid, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutGridStyle = {
  height: "100vh",
  maxWidth: "1265px",
};

const Layout = () => {
  return (
    <Stack alignItems="center">
      <Grid container sx={LayoutGridStyle}>
        <Grid item xs={2.346} sx={{ backgroundColor: "red" }}></Grid>
        <Grid container item xs={9.654} columnGap={4}>
          <Grid item xs={7} sx={{ backgroundColor: "green" }}>
            <Outlet />
          </Grid>
          <Grid item xs={4.6} sx={{ backgroundColor: "blue" }}></Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Layout;
