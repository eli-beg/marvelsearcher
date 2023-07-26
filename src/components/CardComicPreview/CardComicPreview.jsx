import SecondaryText from "./SecondaryText";
import {
  Container,
  Content,
  CustomizedDescription,
  CustomizedTitle,
  HeaderContent,
  Image,
} from "./styled";

const CardComicPreview = (props) => {
  const { comicDataPreview } = props;

  return (
    <Container>
      <Image src={comicDataPreview.urlImage} alt="img not found" />
      <Content>
        <HeaderContent>
          <CustomizedTitle>{comicDataPreview.title}</CustomizedTitle>
        </HeaderContent>
        <HeaderContent>
          <SecondaryText comicData={comicDataPreview.date}></SecondaryText>
          <SecondaryText comicData={comicDataPreview.creators} />
        </HeaderContent>
        <CustomizedDescription>
          {comicDataPreview.description}
        </CustomizedDescription>
      </Content>
    </Container>
  );
};

export default CardComicPreview;
