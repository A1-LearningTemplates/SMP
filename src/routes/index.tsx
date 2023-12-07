import { RouteObject, createBrowserRouter } from "react-router-dom";

import { Suspense, lazy } from "react";
import Root from "../components/Root";
import Main from "../components/Main";
// import Home from "../components/Home";
// import Messenger from "../components/Messenger";
const Home = lazy(() => import("../components/Home"));
const Messenger = lazy(() => import("../components/Messenger"));
const initRouter: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
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
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
];
const router = createBrowserRouter(initRouter);
export default router;
