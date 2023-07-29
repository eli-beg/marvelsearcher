import { CardItem } from "../CardItem/CardItem";
import { CardsGridContainer } from "./styled";

const CardsGrid = (props) => {
  const {
    items,
    openModalComicsList,
    handleAddOrRemoveFavorite,
    checkIsFavoriteIcon,
    gridColumns,
  } = props;

  return (
    <CardsGridContainer gridColumns={gridColumns}>
      {items &&
        items.map((item) => {
          return (
            <CardItem
              key={item.id}
              item={item}
              openModalComicsList={openModalComicsList}
              handleAddOrRemoveFavorite={handleAddOrRemoveFavorite}
              checkIsFavoriteIcon={checkIsFavoriteIcon}
            />
          );
        })}
    </CardsGridContainer>
  );
};
export default CardsGrid;
