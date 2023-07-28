import {
  Card,
  ItemImage,
  FavIconContainer,
  CoverShadowImageToRight,
  CustomizedTitle,
} from "./styled";
import { FavIcon } from "../icons";
import { CoverShadowImageToTop } from "../../styles/theme";

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
          // Function to add or remove character from favorite list in favoritesContext and cookies
          handleAddOrRemoveFavorite(event, item);

          checkIsFavoriteIcon(item.id);
        }}
      >
        <FavIcon color={"white"} size={"25px"} isFilled={item.isFavorite} />
      </FavIconContainer>
      <CustomizedTitle>{item.name}</CustomizedTitle>
      <ItemImage src={item.urlImage} alt="img not found" />
      <CoverShadowImageToTop />
      <CoverShadowImageToRight />
    </Card>
  );
};
