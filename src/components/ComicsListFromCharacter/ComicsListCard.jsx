import { FavIcon } from "../icons";
import {
  CardContainer,
  Content,
  CustomizedDescription,
  CustomizedTitle,
  IconContainer,
  Image,
} from "./styledCard";

const ComicsListCard = (props) => {
  const {
    item,
    navigateToComicPreview,
    handleAddOrRemoveFavoriteComic,
    checkIsFavoriteIcon,
    selectedCard,
    openModalComicsList,
    getFavoriteList,
  } = props;

  return (
    <CardContainer onClick={() => navigateToComicPreview(item.id)}>
      <Image src={item.urlImage} alt="img not found" />
      <Content>
        <CustomizedTitle>
          {item.title}
          <IconContainer
            onClick={(event) => {
              handleAddOrRemoveFavoriteComic(event, item);
              checkIsFavoriteIcon(item);
              openModalComicsList(selectedCard);
            }}
          >
            <FavIcon color={"grey"} size={"16px"} isFilled={item.isFavorite} />
          </IconContainer>
        </CustomizedTitle>
        <CustomizedDescription>{item.description}</CustomizedDescription>
      </Content>
    </CardContainer>
  );
};

export default ComicsListCard;
