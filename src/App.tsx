import "./App.css";

import NavBar from "./components/NavBar";
import { RouterProvider } from "react-router-dom";
import authRouter from "./routes/authRoutes";
import unAuthRouter from "./routes/unAuthRoutes";
import { Authenticated, Unauthenticated } from "convex/react";
import { Provider } from "react-redux";
import { store } from "./features/store";
function App() {
  console.log("rerenderd");

  return (
    <div className="px-1 lg:px-20 xl:px-24 bg-slate-200">
      <NavBar />
      <Unauthenticated>
        <RouterProvider router={unAuthRouter} />
      </Unauthenticated>
      <Authenticated>
        <Provider store={store}>
          <RouterProvider
            router={authRouter}
            fallbackElement={<h1 className=" text-2xl">loading..</h1>}
          />
        </Provider>
      </Authenticated>
    </div>
  );
}

export default App;
