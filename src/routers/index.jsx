import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/index";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
