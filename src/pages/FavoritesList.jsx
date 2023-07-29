import { useContext, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import CardsGrid from "../components/CardsGrid/CardsGrid";
import { FavoritesContext } from "../context/FavoritesContext";
import { SearchContext } from "../context/SearchContext";
import ComicsListFromCharacter from "../components/ComicsListFromCharacter/ComicsListFromCharacter";
import { useNavigate } from "react-router-dom";
import { Section } from "../styles/theme";

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
    checkIsFavoriteIcon,
  } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    getFavoriteList();
  }, []);
  const navigateToComicPreview = (id) => {
    navigate(`/comic/${id}`);
  };
  return (
    <Section id="favorites-list">
      {isLoadingFavorites ? (
        <Loading />
      ) : (
        <CardsGrid
          items={favoritesList}
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
    </Section>
  );
};

export default FavoritesList;
