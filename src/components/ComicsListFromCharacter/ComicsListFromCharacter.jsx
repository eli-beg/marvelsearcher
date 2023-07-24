import ComicsListModal from "./ComicsListModal";

const ComicsListFromCharacter = (props) => {
  const {
    selectedCard,
    closeModalComicsList,
    isLoadingModal,
    navigateToComicPreview,
  } = props;

  return (
    <>
      {selectedCard ? (
        <ComicsListModal
          selectedCard={selectedCard}
          closeModalComicsList={closeModalComicsList}
          isLoadingModal={isLoadingModal}
          navigateToComicPreview={navigateToComicPreview}
        />
      ) : null}
    </>
  );
};

export default ComicsListFromCharacter;
