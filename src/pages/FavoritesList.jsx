import { useContext, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import CardsGrid from "../components/CardsGrid/CardsGrid";
import { FavoritesContext } from "../context/FavoritesContext";
import { SearchContext } from "../context/SearchContext";
import ComicsListFromCharacter from "../components/ComicsListFromCharacter/ComicsListFromCharacter";

const FavoritesList = () => {
  const {
    favoritesList,
    isLoadingFavorites,
    getFavoriteList,
    handleAddOrRemoveFavorite,
  } = useContext(FavoritesContext);
  const {
    openModalComicsList,
    selectedCard,
    comicsListByCharacter,
    closeModalComicsList,
    isLoadingModal,
    navigateToComicPreview,
  } = useContext(SearchContext);

  useEffect(() => {
    getFavoriteList();
  }, []);

  return (
    <>
      {isLoadingFavorites ? (
        <Loading />
      ) : (
        <CardsGrid
          items={favoritesList}
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

export default FavoritesList;
