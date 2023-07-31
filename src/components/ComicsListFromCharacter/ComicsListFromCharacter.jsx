import ComicsListModal from "./ComicsListModal";

const ComicsListFromCharacter = (props) => {
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
    <>
      {selectedCard ? (
        <ComicsListModal
          selectedCard={selectedCard}
          closeModalComicsList={closeModalComicsList}
          isLoadingModal={isLoadingModal}
          navigateToComicPreview={navigateToComicPreview}
          handleAddOrRemoveFavoriteComic={handleAddOrRemoveFavoriteComic}
          checkIsFavoriteIcon={checkIsFavoriteIcon}
          comicsListByCharacter={comicsListByCharacter}
          openModalComicsList={openModalComicsList}
          getFavoriteList={getFavoriteList}
        />
      ) : null}
    </>
  );
};

export default ComicsListFromCharacter;
