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
    handleAddOrRemoveFavoriteComic,
    checkIsFavoriteIcon,
    comicsListByCharacter,
    openModalComicsList,
    getFavoriteList,
  } = props;

  return (
    <ModalBackdrop
      onClick={() => {
        closeModalComicsList;
        getFavoriteList();
      }}
    >
      <ModalContainer>
        <ModalHeader
          title={selectedCard.name}
          closeModalComicsList={closeModalComicsList}
        />

        {isLoadingModal ? (
          <Loading />
        ) : (
          <ComicsList
            navigateToComicPreview={navigateToComicPreview}
            handleAddOrRemoveFavoriteComic={handleAddOrRemoveFavoriteComic}
            checkIsFavoriteIcon={checkIsFavoriteIcon}
            comicsListByCharacter={comicsListByCharacter}
            openModalComicsList={openModalComicsList}
            selectedCard={selectedCard}
            getFavoriteList={getFavoriteList}
          />
        )}
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ComicsListModal;
