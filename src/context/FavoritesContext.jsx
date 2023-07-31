import { createContext, useCallback, useState } from "react";
import { getCookie, setCookie } from "../utils/cookieUtils";
import { getCharacterById } from "../api/searchCharacters";
import { parseCharacterData } from "../utils/parseCharacterData";
import { addAndRemoveFavorite } from "../utils/addAndRemoveFavorite";
import { getComicById } from "../api/searchComics";
import { parseComicData } from "../utils/parseComicData";
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);
  const [favoritesListComics, setFavoritesListComics] = useState([]);

  // Function to add or remove favorites characters
  const handleAddOrRemoveFavorite = (event, item) => {
    event.stopPropagation();
    if (item.isComic) {
      let favoritesComicsArray = getCookie("favorites_comics");
      const modifiedArray = addAndRemoveFavorite(favoritesComicsArray, item.id);
      const modifiedArrayJSON = JSON.stringify(modifiedArray.array);
      setCookie("favorites_comics", modifiedArrayJSON);
      modifiedArray.operation === "add"
        ? setFavoritesListComics([...favoritesListComics, item])
        : setFavoritesListComics(
            favoritesListComics.filter((comic) => comic.id !== item.id)
          );
    } else if (!item.isComic) {
      let favoritesArray = getCookie("favorites");

      const modifiedArray = addAndRemoveFavorite(favoritesArray, item.id);
      const modifiedArrayJSON = JSON.stringify(modifiedArray.array);
      setCookie("favorites", modifiedArrayJSON);
      modifiedArray.operation === "add"
        ? setFavoritesList([...favoritesList, item])
        : setFavoritesList(
            favoritesList.filter((character) => character.id !== item.id)
          );
    }
  };
  // Function to add or remove favorites comics
  const handleAddOrRemoveFavoriteComic = (event, item) => {
    event.stopPropagation();

    let favoritesComicsArray = getCookie("favorites_comics");
    const modifiedArray = addAndRemoveFavorite(favoritesComicsArray, item.id);
    const modifiedArrayJSON = JSON.stringify(modifiedArray.array);
    setCookie("favorites_comics", modifiedArrayJSON);
    modifiedArray.operation === "add"
      ? setFavoritesListComics([...favoritesListComics, item])
      : setFavoritesListComics(
          favoritesListComics.filter((comic) => comic.id !== item.id)
        );
  };

  // Fuction that checks if cookies were saved, if not set cookies with an empty array
  const checkCookies = () => {
    const cookieValue = getCookie("favorites");
    cookieValue ? null : setCookie("favorites", JSON.stringify([]));
    const cookieValueComic = getCookie("favorites_comics");
    cookieValueComic ? null : setCookie("favorites_comics", JSON.stringify([]));
  };

  // Fuction to get the favorite list
  const getFavoriteList = useCallback(async () => {
    setIsLoadingFavorites(true);
    const favoriteList = getCookie("favorites");
    const favoriteListComics = getCookie("favorites_comics");

    try {
      const dataFavorites = favoriteList.map(async (favId) => {
        const { data } = await getCharacterById(favId);
        if (data) {
          const parseCharacter = parseCharacterData(data.data.results[0]);
          return { ...parseCharacter, isFavorite: true, isComic: false };
        }
      });
      const resp = await Promise.all(dataFavorites);
      setFavoritesList(resp);

      const dataFavoritesComics = favoriteListComics.map(async (favId) => {
        const { data } = await getComicById(favId);
        if (data) {
          const parseComic = parseComicData(data.data.results[0]);
          return { ...parseComic, isFavorite: true, isComic: true };
        }
      });
      const respComic = await Promise.all(dataFavoritesComics);
      setFavoritesListComics(respComic);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingFavorites(false);
    }
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        isLoadingFavorites,
        favoritesList,
        favoritesListComics,
        handleAddOrRemoveFavorite,
        handleAddOrRemoveFavoriteComic,
        getFavoriteList,
        checkCookies,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
