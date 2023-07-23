import { CardItem } from "../CardItem/CardItem";
import { CardsGrid } from "./styled";

const CardsGridComponent = (props) => {
  const { items, handleOpenModal } = props;

  return (
    <CardsGrid>
      {items &&
        items.map((item) => {
          return (
            <CardItem
              key={item.id}
              item={item}
              handleOpenModal={handleOpenModal}
            />
          );
        })}
    </CardsGrid>
  );
};
export default CardsGridComponent;
