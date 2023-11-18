import "./App.css";

import NavBar from "./NavBar";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
function App() {
  return (
    <div className="px-1  lg:px-20 xl:px-24 bg-slate-200">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
