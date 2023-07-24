import { createContext, useEffect, useState } from "react";
import {
  getCharacterByName,
  getRandomCharacter,
  getTotalNumberOfCharacters,
} from "../api/searchCharacters";
import { parseCharacterData } from "../utils/parseCharacterData";
import { getComicsListById } from "../api/searchComics";
import { parseComicsData } from "../utils/parseComicsData";
import { getRandomIndex } from "../utils/getRandomIndex";
// import { getComicsByName } from "../api/searchComics";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  //   const [dataComics, setDataComics] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState([]);
  const [dataCharacters, setDataCharacters] = useState([]);
  const [selectedCard, setSelectedCard] = useState(false);
  const [comicsListByCharacter, setComicsListByCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingModal, setIsLoadingModal] = useState(false);

  const getNumberOfCharacters = async () => {
    setIsLoading(true);
    try {
      const { data } = await getTotalNumberOfCharacters();
      const total = data.data.total;
      if (total) {
        const randomIndex = getRandomIndex(total);
        const { data } = await getRandomCharacter(randomIndex);
        if (data.data.results.length >= 1) {
          const character = parseCharacterData(data.data.results[0]);
          setRandomCharacter([character]);
          console.log(character);
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const searchData = async (inputValue) => {
    setIsLoading(true);
    try {
      const [charactersData] = await Promise.all([
        getCharacterByName(inputValue),
        // getComicsByName(inputValue),
      ]);
      const characters = charactersData.data.data.results.map((c) =>
        parseCharacterData(c)
      );
      setDataCharacters(characters);
      setIsLoading(false);

      //   setDataComics(comicsData.data.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const searchDataComics = async (id) => {
    setIsLoadingModal(true);
    try {
      const comicsData = await getComicsListById(id);
      const arrayComics = parseComicsData(comicsData.data.data.results);
      setComicsListByCharacter(arrayComics);
      setIsLoadingModal(false);
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

  useEffect(() => {
    getNumberOfCharacters();
  }, []);

  return (
    <SearchContext.Provider
      value={{
        getNumberOfCharacters,
        randomCharacter,
        dataCharacters,
        searchData,
        openModalComicsList,
        selectedCard,
        comicsListByCharacter,
        closeModalComicsList,
        isLoading,
        isLoadingModal,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
