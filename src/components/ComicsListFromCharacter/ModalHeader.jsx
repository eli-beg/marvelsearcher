import { CloseIcon } from "../icons";

import { Header, Title } from "./styled";

const ModalHeader = (props) => {
  const { title, closeModalComicsList } = props;
  return (
    <Header>
      <Title>{title}</Title>
      <div onClick={() => closeModalComicsList()}>
        <CloseIcon color={"grey"} size={"20px"} />
      </div>
    </Header>
  );
};

export default ModalHeader;
