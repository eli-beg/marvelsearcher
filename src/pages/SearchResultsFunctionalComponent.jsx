import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate, useParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const params = useParams();

  const navigateToComicPreview = (id) => {
    navigate(`/comic/${id}`);
  };

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
        navigateToComicPreview={navigateToComicPreview}
      />
    </>
  );
};

export default SearchResultsFunctionalComponent;
