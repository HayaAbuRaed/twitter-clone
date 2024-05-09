import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "../components/Loader";
import publicRoutes from "./publicRoutes";

const AppRoutes = () => {
  const appRoutes = useRoutes([publicRoutes]);

  // return appRoutes;
  return <Suspense fallback={<Loader />}>{appRoutes}</Suspense>;
};

export default AppRoutes;
