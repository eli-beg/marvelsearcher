import { useContext } from "react";
import CardsGrid from "../components/CardsGrid/CardsGrid";
import Loading from "../components/Loading/Loading";
import { SearchContext } from "../context/SearchContext";

const HomeRandomCharacter = () => {
  const { isLoading, randomCharacter } = useContext(SearchContext);

  return <>{isLoading ? <Loading /> : <CardsGrid items={randomCharacter} />}</>;
};

export default HomeRandomCharacter;
