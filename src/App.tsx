import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="px-1 lg:px-20 xl:px-24 bg-slate-200 h-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
