import "./App.css";

import NavBar from "./NavBar";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
function App() {
  return (
    <div className="px-1 md:px-10 lg:px-20 xl:px-24">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
