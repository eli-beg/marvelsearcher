import {
  LogoImage,
  VerticalSeparator,
  Header,
  Input,
} from "../../styles/style";
import logo from "../../assets/Marvel-Comics-logo.png";
import { FavIcon, SearchIcon } from "../icons";

const HeaderRenderComponent = () => {
  return (
    <Header>
      <LogoImage src={logo} alt="img not found" />
      <VerticalSeparator />
      <SearchIcon />
      <Input placeholder="Buscar" />
      <FavIcon />
      <VerticalSeparator />
    </Header>
  );
};

export default HeaderRenderComponent;
