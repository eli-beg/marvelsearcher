import { useContext, useState } from "react";
import HeaderRender from "./HeaderRender";
import { useNavigate } from "react-router-dom";
import { isURL } from "../../utils/isUrl";
import { parseComicUrl } from "../../utils/parseComicUrl";
import { FavoritesContext } from "../../context/FavoritesContext";
import { SearchContext } from "../../context/SearchContext";

const HeaderFunctional = () => {
  const [inputValue, setInputValue] = useState("");
  const { getFavoriteList } = useContext(FavoritesContext);
  const { getNumberOfCharacters, closeModalComicsList } =
    useContext(SearchContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isURL(inputValue)
      ? navigate(`/comic/${parseComicUrl(inputValue)}`)
      : navigate(`/character/${inputValue}`);
    setInputValue("");
  };
  const navigateToFavoritesList = () => {
    getFavoriteList();
    navigate("/favorites");
  };
  const navigateToHome = () => {
    navigate("/");
    closeModalComicsList();
    getNumberOfCharacters();
  };

  return (
    <HeaderRender
      handleInputChange={handleInputChange}
      inputValue={inputValue}
      handleSubmit={handleSubmit}
      getFavoriteList={getFavoriteList}
      navigateToFavoritesList={navigateToFavoritesList}
      navigateToHome={navigateToHome}
    />
  );
};

export default HeaderFunctional;
