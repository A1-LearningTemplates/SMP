import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import Messenger from "../components/Messenger";
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
  {
    path: "/messenger",
    element: <Messenger />,
  },
];
export default createBrowserRouter(router, { basename: "/" });
