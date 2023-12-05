import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

import { Suspense, lazy } from "react";
// import Home from "../components/Home";
// import Messenger from "../components/Messenger";
const Home = lazy(() => import("../components/Home"));
const Messenger = lazy(() => import("../components/Messenger"));
const initRouter: RouteObject[] = [
  {
    index: true,
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<p>Loading ...</p>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/messenger",
    element: (
      <Suspense fallback={<p>Loading ...</p>}>
        <Messenger />
      </Suspense>
    ),
  },
];
const authRouter = createBrowserRouter(initRouter);
export default authRouter;
