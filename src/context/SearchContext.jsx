import { createContext, useEffect, useState, useCallback } from "react";
import {
  getCharacterByName,
  getRandomCharacter,
  getTotalNumberOfCharacters,
} from "../api/searchCharacters";
import { getComicsListById, getComictById } from "../api/searchComics";
import { parseCharacterData } from "../utils/parseCharacterData";
import { parseComicsData } from "../utils/parseComicsData";
import { getRandomIndex } from "../utils/getRandomIndex";
import { parseComicDataPreview } from "../utils/parseComicDataPreview";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [randomCharacter, setRandomCharacter] = useState([]);
  const [dataCharacters, setDataCharacters] = useState([]);
  const [selectedCard, setSelectedCard] = useState(false);
  const [comicsListByCharacter, setComicsListByCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [comicDataPreview, setComicDataPreview] = useState({});

  // Function to get a random character
  const getNumberOfCharacters = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getTotalNumberOfCharacters();
      const total = data.data.total;

      if (total) {
        const randomIndex = getRandomIndex(total);
        const { data } = await getRandomCharacter(randomIndex);
        if (data.data.results.length) {
          const character = parseCharacterData(data.data.results[0]);
          setRandomCharacter([character]);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to search for data of a character
  const searchData = async (inputValue) => {
    setIsLoading(true);
    try {
      const { data } = await getCharacterByName(inputValue);
      const characters = data.data.results.map((c) => parseCharacterData(c));
      setDataCharacters(characters);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to search a datalist of comics from a character
  const searchDataComics = async (id) => {
    setIsLoadingModal(true);
    try {
      const { data } = await getComicsListById(id);
      const arrayComics = parseComicsData(data.data.results);
      setComicsListByCharacter(arrayComics);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingModal(false);
    }
  };

  // Function to search data of a comic by url
  const searchDataComicByUrl = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await getComictById(id);
      const parseado = parseComicDataPreview(data.data.results[0]);
      setComicDataPreview(parseado);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModalComicsList = (item) => {
    console.log("hola", item);
    setSelectedCard(item);
    searchDataComics(item.id);
  };

  const closeModalComicsList = () => {
    setSelectedCard(false);
    setComicsListByCharacter([]);
  };

  useEffect(() => {
    getNumberOfCharacters();
  }, [getNumberOfCharacters]);

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
