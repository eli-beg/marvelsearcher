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
    favoritesListComics,
    isLoadingFavorites,
    getFavoriteList,
    handleAddOrRemoveFavorite,
    handleAddOrRemoveFavoriteComic,
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
        <div>
          <CardsGrid
            items={favoritesList}
            openModalComicsList={openModalComicsList}
            handleAddOrRemoveFavorite={handleAddOrRemoveFavorite}
            checkIsFavoriteIcon={checkIsFavoriteIcon}
          />
          <CardsGrid
            items={favoritesListComics}
            openModalComicsList={openModalComicsList}
            handleAddOrRemoveFavorite={handleAddOrRemoveFavorite}
            checkIsFavoriteIcon={checkIsFavoriteIcon}
          />
        </div>
      )}
      <ComicsListFromCharacter
        selectedCard={selectedCard}
        comicsListByCharacter={comicsListByCharacter}
        closeModalComicsList={closeModalComicsList}
        isLoadingModal={isLoadingModal}
        navigateToComicPreview={navigateToComicPreview}
        handleAddOrRemoveFavoriteComic={handleAddOrRemoveFavoriteComic}
        checkIsFavoriteIcon={checkIsFavoriteIcon}
        openModalComicsList={openModalComicsList}
        getFavoriteList={getFavoriteList}
      />
    </Section>
  );
};

export default FavoritesList;
