import Title from "./Title";
import { Header } from "./styled";

const ModalHeader = (props) => {
  const { title } = props;
  return (
    <Header>
      <Title name={title} />
    </Header>
  );
};

export default ModalHeader;
