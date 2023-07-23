import { FavIcon } from "../icons";
import {
  CardContainer,
  Content,
  Description,
  IconContainer,
  Image,
  Title,
} from "./styledCard";

const ComicsListCard = (props) => {
  const { item } = props;

  return (
    <CardContainer>
      <Image src={item.urlImage} alt="img not found" />
      <Content>
        <Title>
          {item.title}
          <IconContainer>
            <FavIcon color={"grey"} size={"16px"} />
          </IconContainer>
        </Title>

        <Description>{item.description}</Description>
      </Content>
    </CardContainer>
  );
};

export default ComicsListCard;
