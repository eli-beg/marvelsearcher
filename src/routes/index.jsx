import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../pages/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
