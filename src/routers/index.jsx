import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/index";
import About from "../pages/About";
import Blog from "../pages/blogs/index";
import Post from "../pages/blogs/_id";
import JadwalSholat from "../pages/blogs/jadwalsholat";
import { post, postById, jadwalSholat } from "../apis/loader";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: post,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: postById,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/jadwalsholat",
        element: <JadwalSholat />,
        loader: jadwalSholat,
      },
    ],
  },
]);
