import { useState } from "react";
import HeaderRenderComponent from "./HeaderRenderComponent";

import { useNavigate } from "react-router-dom";
import { isURL } from "../../utils/isUrl";
import { parseComicUrl } from "../../utils/parseComicUrl";

const HeaderFunctionalComponent = () => {
  const [inputValue, setInputValue] = useState("");

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
  return (
    <HeaderRenderComponent
      handleInputChange={handleInputChange}
      inputValue={inputValue}
      handleSubmit={handleSubmit}
    />
  );
};

export default HeaderFunctionalComponent;
