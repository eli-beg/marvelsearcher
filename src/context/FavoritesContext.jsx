import { createContext, useState } from "react";
import { getCookie, setCookie } from "../utils/cookieUtils";
import { getCharacterById } from "../api/searchCharacters";
import { parseCharacterData } from "../utils/parseCharacterData";
import { addAndRemoveFavorite } from "../utils/addAndRemoveFavorite";
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  const handleAddOrRemoveFavorite = (event, item) => {
    event.stopPropagation();

    let favoritesArray = getCookie("favorites");
    const modifiedArray = addAndRemoveFavorite(favoritesArray, item.id);
    const modifiedArrayJSON = JSON.stringify(modifiedArray.array);
    setCookie(modifiedArrayJSON, "userFavorites");
    modifiedArray.operation === "add"
      ? setFavoritesList([...favoritesList, item])
      : setFavoritesList(
          favoritesList.filter((character) => character.id !== item.id)
        );
  };

  // Fuction that checks if cookies were saved, if not set cookies with an empty array
  const checkCookies = () => {
    const cookieValue = getCookie("favorites");
    cookieValue ? null : setCookie(JSON.stringify([]), "favorites");
  };

  // Fuction to get the favorite list
  const getFavoriteList = async () => {
    setIsLoadingFavorites(true);
    const favoriteList = getCookie("favorites");

    try {
      const dataFavorites = favoriteList.map(async (favId) => {
        const { data } = await getCharacterById(favId);
        if (data) {
          const parseCharacter = parseCharacterData(data.data.results[0]);
          return { ...parseCharacter, isFavorite: true };
        }
      });
      const resp = await Promise.all(dataFavorites);
      setFavoritesList(resp);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingFavorites(false);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        isLoadingFavorites,
        favoritesList,
        handleAddOrRemoveFavorite,
        getFavoriteList,
        checkCookies,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
