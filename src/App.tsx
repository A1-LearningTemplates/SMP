import "./App.css";

import NavBar from "./components/NavBar";
import { RouterProvider } from "react-router-dom";
import authRouter from "./routes/AuthRoutes";
import unAuthRouter from "./routes/UnAuthRoutes";
import { Authenticated, Unauthenticated } from "convex/react";

function App() {
  return (
    <div className="px-1 lg:px-20 xl:px-24 bg-slate-200">
      <NavBar />
      <Unauthenticated>
        <RouterProvider router={unAuthRouter} />
      </Unauthenticated>
      <Authenticated>
        <RouterProvider
          router={authRouter}
          fallbackElement={<h1 className=" text-2xl">loading..</h1>}
        />
      </Authenticated>
    </div>
  );
}

export default App;
