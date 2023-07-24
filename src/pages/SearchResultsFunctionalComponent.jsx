import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useParams } from "react-router-dom";

import CardsGridComponent from "../components/CardsGrid/CardsGridComponent";
import ComicsListFromCharacter from "../components/ComicsListFromCharacter/ComicsListFromCharacter";
import Loading from "../components/Loading/Loading";

const SearchResultsFunctionalComponent = () => {
  const {
    dataCharacters,
    searchData,
    openModalComicsList,
    selectedCard,
    comicsListByCharacter,
    closeModalComicsList,
    isLoading,
    isLoadingModal,
  } = useContext(SearchContext);

  const params = useParams();

  useEffect(() => {
    searchData(params.inputValue);
  }, [params.inputValue]);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <CardsGridComponent
          items={dataCharacters}
          openModalComicsList={openModalComicsList}
        />
      )}
      <ComicsListFromCharacter
        selectedCard={selectedCard}
        comicsListByCharacter={comicsListByCharacter}
        closeModalComicsList={closeModalComicsList}
        isLoadingModal={isLoadingModal}
      />
    </>
  );
};

export default SearchResultsFunctionalComponent;
