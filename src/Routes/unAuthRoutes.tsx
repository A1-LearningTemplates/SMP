import { RouteObject, createBrowserRouter } from "react-router-dom";

import Main from "../components/Main/index";

const router: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
];
export default createBrowserRouter(router, { basename: "/" });
