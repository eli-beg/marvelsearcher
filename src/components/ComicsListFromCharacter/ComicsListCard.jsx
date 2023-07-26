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
  const { item, navigateToComicPreview } = props;

  return (
    <CardContainer onClick={() => navigateToComicPreview(item.id)}>
      <Image src={item.urlImage} alt="img not found" />
      <Content>
        <CustomizedTitle>
          {item.title}
          <IconContainer>
            <FavIcon color={"grey"} size={"16px"} />
          </IconContainer>
        </CustomizedTitle>
        <CustomizedDescription>{item.description}</CustomizedDescription>
      </Content>
    </CardContainer>
  );
};

export default ComicsListCard;
