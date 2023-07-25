import { CardItem } from "../CardItem/CardItem";
import { CardsGridContainer } from "./styled";

const CardsGrid = (props) => {
  const { items, openModalComicsList } = props;

  return (
    <CardsGridContainer>
      {items &&
        items.map((item) => {
          return (
            <CardItem
              key={item.id}
              item={item}
              openModalComicsList={openModalComicsList}
            />
          );
        })}
    </CardsGridContainer>
  );
};
export default CardsGrid;
