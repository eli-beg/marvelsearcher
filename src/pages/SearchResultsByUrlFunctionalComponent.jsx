import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const SearchResultsByUrlFunctionalComponent = () => {
  const { searchDataComicByUrl, comicDataPreview } = useContext(SearchContext);

  const params = useParams();

  useEffect(() => {
    console.log("params id", params.id);
    searchDataComicByUrl(params.id);
  }, [params.id]);
  console.log(comicDataPreview);
  return <div>holaaa</div>;
};

export default SearchResultsByUrlFunctionalComponent;
