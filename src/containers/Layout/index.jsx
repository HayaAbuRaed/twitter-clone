import { Grid, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar";
import { LEFT_BREAKPOINT } from "../../components/LeftSideBar/constants";

const LayoutGridStyle = {
  height: "100vh",
  maxWidth: "1265px",
};

const Layout = () => {
  const isLeftSideBarExpanded = !useMediaQuery(LEFT_BREAKPOINT);

  return (
    <Stack alignItems="center">
      <Grid container sx={LayoutGridStyle}>
        <Grid item xs={0.75} lg={isLeftSideBarExpanded ? 2.6087 : 0.75}>
          <LeftSideBar />
        </Grid>

        <Grid
          container
          item
          xs={11.25}
          lg={isLeftSideBarExpanded ? 9.3913 : 11.25}
          columnGap={4}
        >
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
