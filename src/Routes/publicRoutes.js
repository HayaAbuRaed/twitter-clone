import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Layout = lazy(() => import("../containers/Layout/index.jsx"));
const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Profile = lazy(() => import("../pages/Profile"));

const publicRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <Home />,
          index: true,
        },
        {
          path: "/:username",
          element: <Profile />,
        },
      ],
    },
  ],
};

export default publicRoutes;
