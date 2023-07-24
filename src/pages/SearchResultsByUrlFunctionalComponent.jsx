import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import CardComicPreview from "../components/CardComicPreview/CardComicPreview";
import Loading from "../components/Loading/Loading";

const SearchResultsByUrlFunctionalComponent = () => {
  const { searchDataComicByUrl, comicDataPreview, isLoading } =
    useContext(SearchContext);

  const params = useParams();

  useEffect(() => {
    searchDataComicByUrl(params.id);
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CardComicPreview comicDataPreview={comicDataPreview} />
      )}
    </>
  );
};

export default SearchResultsByUrlFunctionalComponent;
