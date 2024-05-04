import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Layout = lazy(() => import("../containers/Layout/index.jsx"));

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
      ],
    },
  ],
};

export default publicRoutes;
