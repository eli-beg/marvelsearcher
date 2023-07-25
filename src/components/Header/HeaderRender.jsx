import {
  LogoImage,
  VerticalSeparator,
  Header,
  Input,
  FormContainer,
} from "./styled";
import logo from "../../assets/Marvel-Comics-logo.png";
import { FavIcon, SearchIcon } from "../icons";

const HeaderRender = (props) => {
  const { handleInputChange, inputValue, handleSubmit } = props;

  return (
    <Header>
      <LogoImage src={logo} alt="img not found" />
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
      <FavIcon color={"#a8a8a8"} size={"25px"} />
      <VerticalSeparator />
    </Header>
  );
};

export default HeaderRender;