import { Grid, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar";

const LayoutGridStyle = {
  height: "100vh",
  maxWidth: "1265px",
};

const Layout = () => {
  return (
    <Stack alignItems="center">
      <Grid container sx={LayoutGridStyle}>
        <Grid item xs={2.6087}>
          <LeftSideBar />
        </Grid>

        <Grid container item xs={9.3913} columnGap={4}>
          <Grid item xs={7} sx={{ borderInline: "1px rgb(47, 51, 54) solid" }}>
            <Outlet />
          </Grid>
          <Grid item xs={4.6}></Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Layout;
