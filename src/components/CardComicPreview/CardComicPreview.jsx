import { Description, Title } from "../../styles/theme";
import SecondaryText from "./SecondaryText";
import { Container, Content, HeaderContent, Image } from "./styled";

const CardComicPreview = (props) => {
  const { comicDataPreview } = props;
  console.log(comicDataPreview);
  return (
    <Container>
      <Image src={comicDataPreview.urlImage} alt="img not found" />
      <Content>
        <HeaderContent>
          <Title>{comicDataPreview.title}</Title>
        </HeaderContent>
        <HeaderContent>
          <SecondaryText comicData={comicDataPreview.date}></SecondaryText>
          <SecondaryText comicData={comicDataPreview.creators} />
        </HeaderContent>
        <Description>{comicDataPreview.description}</Description>
      </Content>
    </Container>
  );
};

export default CardComicPreview;
