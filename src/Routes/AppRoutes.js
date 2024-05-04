import { useRoutes } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import { Suspense } from "react";


const AppRoutes = () => {
  const appRoutes = useRoutes([publicRoutes]);

  // return appRoutes;
  return <Suspense fallback={<div>Loading...</div>}>{appRoutes}</Suspense>;
};

export default AppRoutes;
