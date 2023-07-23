import ModalHeader from "./ModalHeader";
import { ModalBackdrop, ModalContainer } from "./styled";

const ComicsListModal = (props) => {
  const { selectedCard } = props;
  return (
    <ModalBackdrop open>
      <ModalContainer>
        <ModalHeader title={selectedCard.name} />
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ComicsListModal;
