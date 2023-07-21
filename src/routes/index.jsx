import { createBrowserRouter } from "react-router-dom";
import HomeFunctionalComponent from "../components/Home/HomeFunctionalComponent";
import MainLayout from "../pages/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeFunctionalComponent />,
      },
    ],
  },
]);
