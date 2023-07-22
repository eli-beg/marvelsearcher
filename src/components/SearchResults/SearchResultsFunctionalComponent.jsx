import { useContext, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useParams } from "react-router-dom";

import CardsGridComponent from "../CardsGrid/CardsGridComponent";

const SearchResultsFunctionalComponent = () => {
  const { dataCharacters, searchData } = useContext(SearchContext);

  const params = useParams();

  useEffect(() => {
    searchData(params.inputValue);
  }, [params.inputValue]);

  return <CardsGridComponent items={dataCharacters} />;
};

export default SearchResultsFunctionalComponent;
