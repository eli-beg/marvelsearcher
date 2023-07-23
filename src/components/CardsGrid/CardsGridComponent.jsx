import { CardItem } from "../CardItem/CardItem";
import { CardsGrid } from "./styled";

const CardsGridComponent = (props) => {
  const { items, openModalComicsList } = props;

  return (
    <CardsGrid>
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
    </CardsGrid>
  );
};
export default CardsGridComponent;
