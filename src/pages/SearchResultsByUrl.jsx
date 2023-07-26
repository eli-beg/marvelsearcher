import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import CardComicPreview from "../components/CardComicPreview/CardComicPreview";
import Loading from "../components/Loading/Loading";

const SearchResultsByUrl = () => {
  const {
    searchDataComicByUrl,
    comicDataPreview,
    isLoading,
    cleanComicsDataPreview,
  } = useContext(SearchContext);

  const params = useParams();

  useEffect(() => {
    searchDataComicByUrl(params.id);
    return () => {
      cleanComicsDataPreview();
    };
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

export default SearchResultsByUrl;
