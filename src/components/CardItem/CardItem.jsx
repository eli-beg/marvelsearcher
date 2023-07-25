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
  const {
    item,
    openModalComicsList,
    handleAddOrRemoveFavorite,
    checkIsFavoriteIcon,
  } = props;

  return (
    <Card onClick={() => openModalComicsList(item)}>
      <FavIconContainer
        onClick={(event) => {
          handleAddOrRemoveFavorite(event, item.id, item);
          checkIsFavoriteIcon(item.id);
        }}
      >
        <FavIcon color={"white"} size={"25px"} isFilled={item.isFavorite} />
      </FavIconContainer>
      <Title>{item.name}</Title>
      <ItemImage src={item.urlImage} alt="img not found" />
      <CoverShadowToTop />
      <CoverShadowTopRight />
    </Card>
  );
};
