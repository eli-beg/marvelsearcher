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
    handleOpenModal,
    comicsListByCharacter,
  } = useContext(SearchContext);

  const params = useParams();

  useEffect(() => {
    searchData(params.inputValue);
  }, [params.inputValue]);

  return (
    <>
      <CardsGridComponent
        items={dataCharacters}
        handleOpenModal={handleOpenModal}
      />
      <ComicsListFromCharacter
        selectedCard={selectedCard}
        comicsListByCharacter={comicsListByCharacter}
      />
    </>
  );
};

export default SearchResultsFunctionalComponent;
