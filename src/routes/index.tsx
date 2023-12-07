import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Root from "../components/Root";
import Main from "../components/Main";
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import ErrorPage from "../components/ErrorPage";
const Home = lazy(() => import("../components/Home"));
const Messenger = lazy(() => import("../components/Messenger"));
const initRouter: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: (
          <>
            <Unauthenticated>
              <Main />
            </Unauthenticated>
            <AuthLoading>
              <p className="mt-20">Loading ...</p>
            </AuthLoading>
          </>
        ),
      },
      {
        index: true,
        path: "home",
        element: (
          <Suspense fallback={<p>Loading ...</p>}>
            <AuthLoading>
              <p className="mt-20">Loading ...</p>
            </AuthLoading>
            <Authenticated>
              <Home />
            </Authenticated>
          </Suspense>
        ),
      },
      {
        path: "messenger",
        element: (
          <Suspense fallback={<p>Loading ...</p>}>
            <AuthLoading>
              <p className="mt-20">Loading ...</p>
            </AuthLoading>
            <Authenticated>
              <Messenger />
            </Authenticated>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<p>Loading ...</p>}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
];
const router = createBrowserRouter(initRouter);
export default router;
