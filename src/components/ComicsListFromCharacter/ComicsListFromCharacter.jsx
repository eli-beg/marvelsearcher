import ComicsListModal from "./ComicsListModal";

const ComicsListFromCharacter = (props) => {
  const { selectedCard, closeModalComicsList, isLoadingModal } = props;

  return (
    <>
      {selectedCard ? (
        <ComicsListModal
          selectedCard={selectedCard}
          closeModalComicsList={closeModalComicsList}
          isLoadingModal={isLoadingModal}
        />
      ) : null}
    </>
  );
};

export default ComicsListFromCharacter;
