import { CardItem } from "../CardItem/CardItem";
import { CardsGrid } from "./styled";

const CardsGridComponent = (props) => {
  const { items } = props;

  return (
    <CardsGrid>
      {items &&
        items.map((item) => {
          return (
            <CardItem key={item.id} name={item.name} urlImage={item.urlImage} />
          );
        })}
    </CardsGrid>
  );
};
export default CardsGridComponent;
