import { createBrowserRouter } from "react-router-dom";
import HomeRandomCharacter from "../pages/HomeRandomCharacter";
import MainLayout from "../components/MainLayout/MainLayout";
import SearchCharactersResults from "../pages/SearchCharactersResults";
import SearchResultsByUrl from "../pages/SearchResultsByUrl";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeRandomCharacter />,
      },
      {
        path: "/character/:inputValue",
        element: <SearchCharactersResults />,
      },
      {
        path: "/comic/:id",
        element: <SearchResultsByUrl />,
      },
    ],
  },
]);
