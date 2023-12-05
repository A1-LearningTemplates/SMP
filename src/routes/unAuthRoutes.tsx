import { RouteObject, createBrowserRouter } from "react-router-dom";

import Main from "../components/Main/index";

const initRouter: RouteObject[] = [
  {
    path: "/",
    element: <Main />,
  },
];
const unAuthRouter = createBrowserRouter(initRouter);
export default unAuthRouter;
