import { createBrowserRouter } from "react-router-dom";
import HomeFunctionalComponent from "../components/Home/HomeFunctionalComponent";
import MainLayout from "../pages/MainLayout";
import SearchResultsFunctionalComponent from "../components/SearchResults/SearchResultsFunctionalComponent";

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
