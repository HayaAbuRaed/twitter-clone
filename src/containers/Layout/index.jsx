import { Grid, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBar";
import RightSideBar from "../../components/RightSideBar";
import useMediaQuery from "../../hooks/useMediaQuery";

const LayoutGridStyle = {
  height: "100vh",
  maxWidth: "1265px",
  display: "flex",
  justifyContent: "center",
};

const Layout = () => {
  const { isLeftSideBarExpanded } = useMediaQuery();

  return (
    <Stack alignItems="center">
      <Grid container sx={LayoutGridStyle}>
        <Grid
          item
          xs={0}
          sm={2.28}
          md={1}
          lg={isLeftSideBarExpanded ? 2.6087 : 1}
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
          md={11}
          lg={isLeftSideBarExpanded ? 9.3913 : 11}
          maxWidth={{ md: "980.4px" }}
          columnGap={{ xs: 0, md: 2, lg: 4 }}
          height="100vh"
        >
          <Grid
            item
            xs={12}
            md={7}
            maxWidth={{ sm: "600px" }}
            sx={{ borderInline: "1px rgb(47, 51, 54) solid" }}
          >
            <Outlet />
          </Grid>

          <Grid
            item
            xs={0}
            md={4.6}
            display={{ xs: "none", md: "flex" }}
            maxWidth={{ sm: "348.4px" }}
          >
            <RightSideBar />
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Layout;
