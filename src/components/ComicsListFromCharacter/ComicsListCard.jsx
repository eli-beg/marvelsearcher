import { FavIcon } from "../icons";
import {
  CardContainer,
  Content,
  IconContainer,
  Image,
  Title,
} from "./styledCard";
import { Description } from "../../styles/theme";

const ComicsListCard = (props) => {
  const { item, navigateToComicPreview } = props;

  return (
    <CardContainer onClick={() => navigateToComicPreview(item.id)}>
      <Image src={item.urlImage} alt="img not found" />
      <Content>
        <Title>
          {item.title}
          <IconContainer>
            <FavIcon color={"grey"} size={"16px"} />
          </IconContainer>
        </Title>
        <Description fontSize="12px">{item.description}</Description>
      </Content>
    </CardContainer>
  );
};

export default ComicsListCard;
