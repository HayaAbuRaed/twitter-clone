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
        <Grid
          item
          xs={0}
          sm={2.28}
          xl={2.6087}
          display={{ xs: "none", sm: "flex" }}
          justifyContent={{ sm: "flex-end", xl: "flex-start" }}
        >
          <LeftSideBar />
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={9.72}
          xl={9.3913}
          columnGap={{ xs: 0, lg: 4 }}
        >
          <Grid
            item
            xs={12}
            lg={7}
            maxWidth={{ sm: "600px" }}
            sx={{ borderInline: "1px rgb(47, 51, 54) solid" }}
          >
            <Outlet />
          </Grid>
          <Grid item xs={0} lg={4.6}></Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Layout;
