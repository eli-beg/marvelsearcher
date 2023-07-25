import { useContext, useEffect } from "react";
import CardsGrid from "../components/CardsGrid/CardsGrid";
import Loading from "../components/Loading/Loading";
import { SearchContext } from "../context/SearchContext";
import { FavoritesContext } from "../context/FavoritesContext";
import ComicsListFromCharacter from "../components/ComicsListFromCharacter/ComicsListFromCharacter";

const HomeRandomCharacter = () => {
  const {
    isLoading,
    randomCharacter,
    openModalComicsList,
    selectedCard,
    comicsListByCharacter,
    closeModalComicsList,
    isLoadingModal,
    navigateToComicPreview,
  } = useContext(SearchContext);
  const { checkCookies, handleAddOrRemoveFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    checkCookies();
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
