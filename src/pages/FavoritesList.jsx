import { useContext, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import CardsGrid from "../components/CardsGrid/CardsGrid";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoritesList = () => {
  const { favoritesList, isLoadingFavorites, getFavoriteList } =
    useContext(FavoritesContext);

  console.log("lista dsd el comp", isLoadingFavorites, favoritesList);
  useEffect(() => {
    getFavoriteList();
  }, []);
  return (
    <>
      {isLoadingFavorites ? <Loading /> : <CardsGrid items={favoritesList} />}
    </>
  );
};

export default FavoritesList;
