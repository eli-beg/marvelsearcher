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
  const { name, urlImage } = props;

  return (
    <Card>
      <FavIconContainer>
        <FavIcon color={"white"} />
      </FavIconContainer>
      <Title>{name}</Title>
      <ItemImage src={urlImage} alt="img not found" />
      <CoverShadowToTop />
      <CoverShadowTopRight />
    </Card>
  );
};
