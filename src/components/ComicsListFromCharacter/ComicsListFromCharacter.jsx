import ComicsListModal from "./ComicsListModal";

const ComicsListFromCharacter = (props) => {
  const { selectedCard, closeModalComicsList, isLoading } = props;

  return (
    <>
      {selectedCard ? (
        <ComicsListModal
          selectedCard={selectedCard}
          closeModalComicsList={closeModalComicsList}
          isLoading={isLoading}
        />
      ) : null}
    </>
  );
};

export default ComicsListFromCharacter;
