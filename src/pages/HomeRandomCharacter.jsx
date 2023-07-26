import { useContext, useEffect } from "react";
import CardsGrid from "../components/CardsGrid/CardsGrid";
import Loading from "../components/Loading/Loading";
import { SearchContext } from "../context/SearchContext";
import { FavoritesContext } from "../context/FavoritesContext";
import ComicsListFromCharacter from "../components/ComicsListFromCharacter/ComicsListFromCharacter";

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
    navigateToComicPreview,
    checkIsFavoriteIconRandomCharacter,
  } = useContext(SearchContext);
  const { checkCookies, handleAddOrRemoveFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    getNumberOfCharacters();
    return () => cleanRandomCharacterCache();
  }, [getNumberOfCharacters]);

  useEffect(() => {
    checkCookies();
  }, []);

  useEffect(() => {
    return () => closeModalComicsList();
  }, []);

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
