import { useContext, useState } from "react";
import HeaderRender from "./HeaderRender";
import { useNavigate } from "react-router-dom";
import { isURL } from "../../utils/isUrl";
import { parseComicUrl } from "../../utils/parseComicUrl";
import { FavoritesContext } from "../../context/FavoritesContext";

const HeaderFunctional = () => {
  const [inputValue, setInputValue] = useState("");
  const { getFavoriteList } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isURL(inputValue)
      ? navigate(`/comic/${parseComicUrl(inputValue)}`)
      : navigate(`/character/${inputValue}`);
  };
  const navigateToFavoritesList = () => {
    getFavoriteList();
    navigate("/favorites");
  };
  return (
    <HeaderRender
      handleInputChange={handleInputChange}
      inputValue={inputValue}
      handleSubmit={handleSubmit}
      getFavoriteList={getFavoriteList}
      navigateToFavoritesList={navigateToFavoritesList}
    />
  );
};

export default HeaderFunctional;
