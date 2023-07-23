import { createContext, useState } from "react";
import { getCharacterByName } from "../api/searchCharacters";
import { parseCharacterData } from "../utils/parseCharacterData";
import { getComicsListById } from "../api/searchComics";
import { parseComicsData } from "../utils/parseComicsData";
// import { getComicsByName } from "../api/searchComics";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  //   const [dataComics, setDataComics] = useState([]);
  const [dataCharacters, setDataCharacters] = useState([]);
  const [selectedCard, setSelectedCard] = useState(false);
  const [comicsListByCharacter, setComicsListByCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchData = async (inputValue) => {
    try {
      const [charactersData] = await Promise.all([
        getCharacterByName(inputValue),
        // getComicsByName(inputValue),
      ]);
      const characters = charactersData.data.data.results.map((c) =>
        parseCharacterData(c)
      );
      setDataCharacters(characters);
      console.log(characters);
      //   setDataComics(comicsData.data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchDataComics = async (id) => {
    setIsLoading(true);
    try {
      const comicsData = await getComicsListById(id);
      const arrayComics = parseComicsData(comicsData.data.data.results);
      setComicsListByCharacter(arrayComics);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const openModalComicsList = (item) => {
    setSelectedCard(item);
    searchDataComics(item.id);
  };

  const closeModalComicsList = () => {
    setSelectedCard(false);
    setComicsListByCharacter([]);
  };

  return (
    <SearchContext.Provider
      value={{
        dataCharacters,
        searchData,
        openModalComicsList,
        selectedCard,
        comicsListByCharacter,
        closeModalComicsList,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
