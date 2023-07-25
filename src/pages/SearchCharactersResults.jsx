import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate, useParams } from "react-router-dom";

import CardsGrid from "../components/CardsGrid/CardsGrid";
import ComicsListFromCharacter from "../components/ComicsListFromCharacter/ComicsListFromCharacter";
import Loading from "../components/Loading/Loading";
import { FavoritesContext } from "../context/FavoritesContext";

const SearchCharactersResults = () => {
  const {
    dataCharacters,
    searchData,
    openModalComicsList,
    selectedCard,
    comicsListByCharacter,
    closeModalComicsList,
    isLoading,
    isLoadingModal,
    checkIsFavoriteIcon,
  } = useContext(SearchContext);
  const { handleAddOrRemoveFavorite } = useContext(FavoritesContext);
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
        <CardsGrid
          items={dataCharacters}
          openModalComicsList={openModalComicsList}
          handleAddOrRemoveFavorite={handleAddOrRemoveFavorite}
          checkIsFavoriteIcon={checkIsFavoriteIcon}
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

export default SearchCharactersResults;
