import { RouteObject, createBrowserRouter } from "react-router-dom";

import Main from "../components/Main/index";
import NavBar from "../components/NavBar";

const initRouter: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Main />
      </>
    ),
  },
];
const unAuthRouter = createBrowserRouter(initRouter);
export default unAuthRouter;
