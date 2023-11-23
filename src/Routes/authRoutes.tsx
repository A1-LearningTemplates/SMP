import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
const router: RouteObject[] = [
  {
    index: true,
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];
export default createBrowserRouter(router, { basename: "/" });
