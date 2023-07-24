import Loading from "../Loading/Loading";
import ComicsList from "./ComicsList";
import ModalHeader from "./ModalHeader";
import { ModalBackdrop, ModalContainer } from "./styled";

const ComicsListModal = (props) => {
  const { selectedCard, closeModalComicsList, isLoadingModal } = props;

  return (
    <ModalBackdrop onClick={closeModalComicsList}>
      <ModalContainer>
        <ModalHeader
          title={selectedCard.name}
          closeModalComicsList={closeModalComicsList}
        />

        {isLoadingModal ? <Loading /> : <ComicsList />}
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ComicsListModal;
