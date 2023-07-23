import {
  Card,
  ItemImage,
  CoverShadowToTop,
  CoverShadowTopRight,
  Title,
  FavIconContainer,
} from "./styled";
import { FavIcon } from "../icons";

export const CardItem = (props) => {
  const { item, openModalComicsList } = props;

  return (
    <Card onClick={() => openModalComicsList(item)}>
      <FavIconContainer>
        <FavIcon color={"white"} size={"25px"} />
      </FavIconContainer>
      <Title>{item.name}</Title>
      <ItemImage src={item.urlImage} alt="img not found" />
      <CoverShadowToTop />
      <CoverShadowTopRight />
    </Card>
  );
};
