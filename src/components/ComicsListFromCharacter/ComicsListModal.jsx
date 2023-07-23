import ComicsList from "./ComicsList";
import ModalHeader from "./ModalHeader";
import { ModalBackdrop, ModalContainer } from "./styled";

const ComicsListModal = (props) => {
  const { selectedCard, closeModalComicsList, isLoading } = props;

  return (
    <ModalBackdrop onClick={closeModalComicsList}>
      <ModalContainer>
        <ModalHeader
          title={selectedCard.name}
          closeModalComicsList={closeModalComicsList}
        />

        {isLoading ? <div>Cargando...</div> : <ComicsList />}
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ComicsListModal;
