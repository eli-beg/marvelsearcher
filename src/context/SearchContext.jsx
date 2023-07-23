import { createContext, useState } from "react";
import { getCharacterByName } from "../api/searchCharacters";
import { parseCharacterData } from "../utils/parseCharacterData";
import { parseComicsUrls } from "../utils/parseComicsUrls";
import { getComicsById } from "../api/searchComics";
// import { getComicsByName } from "../api/searchComics";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  //   const [dataComics, setDataComics] = useState([]);
  const [dataCharacters, setDataCharacters] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [comicsListByCharacter, setComicsListByCharacter] = useState([]);

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
      //   setDataComics(comicsData.data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchDataComics = async (item) => {
    try {
      const comicsIds = parseComicsUrls(item.comicsUrls);
      const promisesArray = comicsIds.map((id) => getComicsById(id));
      const comicsData = await Promise.all(promisesArray);
      setComicsListByCharacter(comicsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModal = (item) => {
    setSelectedCard(item);
    searchDataComics(item);
  };

  return (
    <SearchContext.Provider
      value={{
        dataCharacters,
        searchData,
        handleOpenModal,
        selectedCard,
        comicsListByCharacter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
