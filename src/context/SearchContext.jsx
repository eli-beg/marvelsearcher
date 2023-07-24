import { createContext, useEffect, useState } from "react";
import {
  getCharacterByName,
  getRandomCharacter,
  getTotalNumberOfCharacters,
} from "../api/searchCharacters";
import { parseCharacterData } from "../utils/parseCharacterData";
import { getComicsListById, getComictById } from "../api/searchComics";
import { parseComicsData } from "../utils/parseComicsData";
import { getRandomIndex } from "../utils/getRandomIndex";
import { parseComicUrl } from "../utils/parseComicUrl";
import { parseComicDataPreview } from "../utils/parseComicDataPreview";
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
  const [comicDataPreview, setComicDataPreview] = useState({});

  // Function to get a random character
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
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to search for data of a character
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

  // Function to search a datalist of comics from a character
  const searchDataComics = async (id) => {
    setIsLoadingModal(true);
    try {
      const comicsData = await getComicsListById(id);
      const arrayComics = parseComicsData(comicsData.data.data.results);
      setComicsListByCharacter(arrayComics);
      setIsLoadingModal(false);
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  };

  // Function to search data of a comic by url
  const searchDataComicByUrl = async (id) => {
    setIsLoading(true);
    try {
      const comicData = await getComictById(id);
      const parseado = parseComicDataPreview(comicData.data.data.results[0]);
      setComicDataPreview(parseado);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
        comicDataPreview,
        searchDataComicByUrl,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
