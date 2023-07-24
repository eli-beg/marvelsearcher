import { useContext } from "react";
import CardsGridComponent from "../components/CardsGrid/CardsGridComponent";
import Loading from "../components/Loading/Loading";
import { SearchContext } from "../context/SearchContext";

const HomeFunctionalComponent = () => {
  const { isLoading, randomCharacter } = useContext(SearchContext);

  return (
    <>
      {isLoading ? <Loading /> : <CardsGridComponent items={randomCharacter} />}
    </>
  );
};

export default HomeFunctionalComponent;
