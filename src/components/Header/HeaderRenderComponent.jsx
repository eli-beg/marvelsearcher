import { LogoImage, VerticalSeparator, Header, Input } from "./styled";
import logo from "../../assets/Marvel-Comics-logo.png";
import { FavIcon, SearchIcon } from "../icons";

const HeaderRenderComponent = (props) => {
  const { handleInputChange, inputValue, handleSubmit } = props;
  return (
    <Header>
      <LogoImage src={logo} alt="img not found" />
      <VerticalSeparator />
      <SearchIcon />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Buscar"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <FavIcon color={"#a8a8a8"} />
      <VerticalSeparator />
    </Header>
  );
};

export default HeaderRenderComponent;
