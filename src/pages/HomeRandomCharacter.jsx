import { useContext, useEffect } from "react";
import CardsGrid from "../components/CardsGrid/CardsGrid";
import Loading from "../components/Loading/Loading";
import { SearchContext } from "../context/SearchContext";
import { FavoritesContext } from "../context/FavoritesContext";
import ComicsListFromCharacter from "../components/ComicsListFromCharacter/ComicsListFromCharacter";
import { useNavigate } from "react-router-dom";

const HomeRandomCharacter = () => {
  const {
    getNumberOfCharacters,
    cleanRandomCharacterCache,
    isLoading,
    randomCharacter,
    openModalComicsList,
    selectedCard,
    comicsListByCharacter,
    closeModalComicsList,
    isLoadingModal,

    checkIsFavoriteIconRandomCharacter,
  } = useContext(SearchContext);
  const { checkCookies, handleAddOrRemoveFavorite } =
    useContext(FavoritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    getNumberOfCharacters();
    return () => cleanRandomCharacterCache();
  }, []);

  useEffect(() => {
    checkCookies();
  }, []);

  useEffect(() => {
    return () => closeModalComicsList();
  }, []);

  const navigateToComicPreview = (id) => {
    navigate(`/comic/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CardsGrid
          items={randomCharacter}
          openModalComicsList={openModalComicsList}
          handleAddOrRemoveFavorite={handleAddOrRemoveFavorite}
          checkIsFavoriteIcon={checkIsFavoriteIconRandomCharacter}
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

export default HomeRandomCharacter;
