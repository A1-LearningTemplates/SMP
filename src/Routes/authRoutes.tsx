import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import Messenger from "../components/Messenger";
const initRouter: RouteObject[] = [
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
const authRouter = createBrowserRouter(initRouter, { basename: "/" });
export { authRouter };
