import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import CardComicPreview from "../components/CardComicPreview/CardComicPreview";
import Loading from "../components/Loading/Loading";
import { Section } from "../styles/theme";

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
    <Section id="search-comics-results">
      {isLoading ? (
        <Loading />
      ) : (
        <CardComicPreview comicDataPreview={comicDataPreview} />
      )}
    </Section>
  );
};

export default SearchResultsByUrl;
