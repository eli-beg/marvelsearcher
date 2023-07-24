import { createBrowserRouter } from "react-router-dom";
import HomeFunctionalComponent from "../pages/HomeFunctionalComponent";
import MainLayout from "../components/MainLayout/MainLayout";
import SearchResultsFunctionalComponent from "../pages/SearchResultsFunctionalComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeFunctionalComponent />,
      },
      {
        path: "/character/:inputValue",
        element: <SearchResultsFunctionalComponent />,
      },
    ],
  },
]);
