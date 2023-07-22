import { getCharacterByName } from "../../api/searchCharacters";
import HeaderRenderComponent from "./HeaderRenderComponent";
import { getComicsByName } from "../../api/searchComics";
import { useState } from "react";

const HeaderFunctionalComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [dataComics, setDataComics] = useState([]);
  const [dataCharacters, setDataCharacters] = useState([]);

  const searchData = async (inputValue) => {
    try {
      const [charactersData, comicsData] = await Promise.all([
        getCharacterByName(inputValue),
        getComicsByName(inputValue),
      ]);
      setDataCharacters(charactersData);
      setDataComics(comicsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchData(inputValue);
  };

  console.log("Characters:", dataCharacters);
  console.log("Comics:", dataComics);
  return (
    <HeaderRenderComponent
      handleInputChange={handleInputChange}
      inputValue={inputValue}
      handleSubmit={handleSubmit}
    />
  );
};

export default HeaderFunctionalComponent;
