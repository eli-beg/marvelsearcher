import { useState } from "react";
import HeaderRenderComponent from "./HeaderRenderComponent";

import { useNavigate } from "react-router-dom";

const HeaderFunctionalComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/character/${inputValue}`);
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
