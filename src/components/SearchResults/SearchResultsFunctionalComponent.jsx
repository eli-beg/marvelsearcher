import { useContext, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useParams } from "react-router-dom";

import CardsGridComponent from "../CardsGrid/CardsGridComponent";
import ComicsListFromCharacter from "../ComicsListFromCharacter/ComicsListFromCharacter";

const SearchResultsFunctionalComponent = () => {
  const {
    dataCharacters,
    searchData,
    selectedCard,
    openModalComicsList,
    comicsListByCharacter,
    closeModalComicsList,
    isLoading,
  } = useContext(SearchContext);

  const params = useParams();

  useEffect(() => {
    searchData(params.inputValue);
  }, [params.inputValue]);

  return (
    <>
      <CardsGridComponent
        items={dataCharacters}
        openModalComicsList={openModalComicsList}
      />
      <ComicsListFromCharacter
        selectedCard={selectedCard}
        comicsListByCharacter={comicsListByCharacter}
        closeModalComicsList={closeModalComicsList}
        isLoading={isLoading}
      />
    </>
  );
};

export default SearchResultsFunctionalComponent;
