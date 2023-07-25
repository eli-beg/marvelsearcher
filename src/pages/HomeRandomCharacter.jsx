import { useContext, useEffect } from "react";
import CardsGrid from "../components/CardsGrid/CardsGrid";
import Loading from "../components/Loading/Loading";
import { SearchContext } from "../context/SearchContext";
import { FavoritesContext } from "../context/FavoritesContext";

const HomeRandomCharacter = () => {
  const { isLoading, randomCharacter } = useContext(SearchContext);
  const { checkCookies } = useContext(FavoritesContext);

  useEffect(() => {
    checkCookies();
  }, []);
  return <>{isLoading ? <Loading /> : <CardsGrid items={randomCharacter} />}</>;
};

export default HomeRandomCharacter;
