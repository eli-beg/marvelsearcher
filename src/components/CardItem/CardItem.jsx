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
  const { item, handleOpenModal } = props;

  return (
    <Card onClick={() => handleOpenModal(item)}>
      <FavIconContainer>
        <FavIcon color={"white"} />
      </FavIconContainer>
      <Title>{item.name}</Title>
      <ItemImage src={item.urlImage} alt="img not found" />
      <CoverShadowToTop />
      <CoverShadowTopRight />
    </Card>
  );
};
