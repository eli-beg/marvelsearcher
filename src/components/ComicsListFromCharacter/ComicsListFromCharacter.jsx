import ComicsListModal from "./ComicsListModal";

const ComicsListFromCharacter = (props) => {
  const { selectedCard, comicsListByCharacter } = props;

  return (
    <>{selectedCard ? <ComicsListModal selectedCard={selectedCard} /> : null}</>
  );
};

export default ComicsListFromCharacter;
