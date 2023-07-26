import { Title } from "../../styles/theme";
import { CloseIcon } from "../icons";

import { CloseIconContainer, Header } from "./styled";

const ModalHeader = (props) => {
  const { title, closeModalComicsList } = props;
  return (
    <Header>
      <Title>{title}</Title>
      <CloseIconContainer onClick={() => closeModalComicsList()}>
        <CloseIcon color={"grey"} size={"20px"} />
      </CloseIconContainer>
    </Header>
  );
};

export default ModalHeader;
