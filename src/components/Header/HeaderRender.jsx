import {
  LogoImage,
  VerticalSeparator,
  Header,
  Input,
  FormContainer,
  FavIconContainer,
} from "./styled";
import logo from "../../assets/Marvel-Comics-logo.png";
import { FavIcon, SearchIcon } from "../icons";

const HeaderRender = (props) => {
  const {
    handleInputChange,
    inputValue,
    handleSubmit,
    navigateToFavoritesList,
    navigateToHome,
  } = props;

  return (
    <Header>
      <LogoImage src={logo} alt="img not found" onClick={navigateToHome} />
      <VerticalSeparator />
      <SearchIcon />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Buscar"
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </FormContainer>
      <FavIconContainer onClick={navigateToFavoritesList}>
        <FavIcon color={"#a8a8a8"} size={"25px"} />
      </FavIconContainer>
      <VerticalSeparator />
    </Header>
  );
};

export default HeaderRender;
