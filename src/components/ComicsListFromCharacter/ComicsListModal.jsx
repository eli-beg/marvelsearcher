import Loading from "../Loading/Loading";
import ComicsList from "./ComicsList";
import ModalHeader from "./ModalHeader";
import { ModalBackdrop, ModalContainer } from "./styled";

const ComicsListModal = (props) => {
  const {
    selectedCard,
    closeModalComicsList,
    isLoadingModal,
    navigateToComicPreview,
  } = props;

  return (
    <ModalBackdrop onClick={closeModalComicsList}>
      <ModalContainer>
        <ModalHeader
          title={selectedCard.name}
          closeModalComicsList={closeModalComicsList}
        />

        {isLoadingModal ? (
          <Loading />
        ) : (
          <ComicsList navigateToComicPreview={navigateToComicPreview} />
        )}
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ComicsListModal;
