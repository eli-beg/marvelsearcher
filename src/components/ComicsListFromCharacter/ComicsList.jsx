import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import ComicsListCard from "./ComicsListCard";
import { ModalContent } from "./styled";

const ComicsList = (props) => {
  const {
    navigateToComicPreview,
    handleAddOrRemoveFavoriteComic,
    checkIsFavoriteIcon,
    comicsListByCharacter,
    openModalComicsList,
    selectedCard,
    getFavoriteList,
  } = props;

  return (
    <>
      <ModalContent>
        {comicsListByCharacter.length > 0
          ? comicsListByCharacter.map((item) => (
              <ComicsListCard
                key={item.id}
                item={item}
                navigateToComicPreview={navigateToComicPreview}
                handleAddOrRemoveFavoriteComic={handleAddOrRemoveFavoriteComic}
                checkIsFavoriteIcon={checkIsFavoriteIcon}
                openModalComicsList={openModalComicsList}
                selectedCard={selectedCard}
                getFavoriteList={getFavoriteList}
              />
            ))
          : "No hemos encontrado comics para este personaje"}
      </ModalContent>
    </>
  );
};

export default ComicsList;
