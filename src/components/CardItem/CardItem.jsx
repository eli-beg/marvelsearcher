import {
  Card,
  ItemImage,
  CoverShadowToTop,
  CoverShadowTopRight,
  Title,
} from "./styled";

export const CardItem = (props) => {
  const { name, urlImage } = props;

  return (
    <Card>
      <Title>{name}</Title>
      <ItemImage src={urlImage} alt="img not found" />
      <CoverShadowToTop />
      <CoverShadowTopRight />
    </Card>
  );
};
