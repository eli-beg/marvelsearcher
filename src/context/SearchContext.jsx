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
import { checkIsFavorite } from "../utils/checkIsFavorite";

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
          // Function to check if the character is favorite and set the atributte isFavorite en true, and then parse the data
          let value = checkIsFavorite(data.data.results[0].id);
          const character = value
            ? { ...parseCharacterData(data.data.results[0]), isFavorite: true }
            : parseCharacterData(data.data.results[0]);
          setRandomCharacter([character]);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cleanRandomCharacterCache = () => {
    setRandomCharacter([]);
  };

  // Function to search for data of a character
  const searchData = async (inputValue) => {
    setIsLoading(true);
    try {
      const { data } = await getCharacterByName(inputValue);
      const characters = data.data.results.map((c) => {
        // Function to check if the character is favorite and set the atributte isFavorite en true, and then parse the data
        let value = checkIsFavorite(c.id);
        return value
          ? { ...parseCharacterData(c), isFavorite: true }
          : parseCharacterData(c);
      });
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
    setSelectedCard(item);
    searchDataComics(item.id);
  };

  const closeModalComicsList = () => {
    setSelectedCard(false);
    setComicsListByCharacter([]);
  };

  // Function to check in cookies if the card is a favorite character
  const checkIsFavoriteIcon = (id) => {
    const value = checkIsFavorite(id);

    if (value) {
      const updatedDataCharacters = dataCharacters.map((character) =>
        character.id === id ? { ...character, isFavorite: true } : character
      );
      setDataCharacters(updatedDataCharacters);
    } else {
      const updatedDataCharacters = dataCharacters.map((character) =>
        character.id === id ? { ...character, isFavorite: false } : character
      );
      setDataCharacters(updatedDataCharacters);
    }
  };

  const checkIsFavoriteIconRandomCharacter = (id) => {
    const randomCharacterItem = randomCharacter[0];
    checkIsFavorite(id)
      ? setRandomCharacter([{ ...randomCharacterItem, isFavorite: true }])
      : setRandomCharacter([{ ...randomCharacterItem, isFavorite: false }]);
  };

  return (
    <SearchContext.Provider
      value={{
        getNumberOfCharacters,
        cleanRandomCharacterCache,
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
        checkIsFavoriteIcon,
        checkIsFavoriteIconRandomCharacter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
