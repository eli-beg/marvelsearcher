import { createContext, useState } from "react";
import { getCharacterByName } from "../api/searchCharacters";
import { parseCharacterData } from "../utils/parseCharacterData";
// import { getComicsByName } from "../api/searchComics";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  //   const [dataComics, setDataComics] = useState([]);
  const [dataCharacters, setDataCharacters] = useState([]);

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

  return (
    <SearchContext.Provider
      value={{
        dataCharacters,

        searchData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
