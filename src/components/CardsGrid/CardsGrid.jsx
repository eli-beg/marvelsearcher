import { CardItem } from "../CardItem/CardItem";
import { CardsGridContainer } from "./styled";

const CardsGrid = (props) => {
  const { items, openModalComicsList, handleAddOrRemoveFavorite } = props;

  return (
    <CardsGridContainer>
      {items &&
        items.map((item) => {
          return (
            <CardItem
              key={item.id}
              item={item}
              openModalComicsList={openModalComicsList}
              handleAddOrRemoveFavorite={handleAddOrRemoveFavorite}
            />
          );
        })}
    </CardsGridContainer>
  );
};
export default CardsGrid;
