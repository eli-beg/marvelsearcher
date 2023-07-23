import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import ComicsListCard from "./ComicsListCard";
import { ModalContent } from "./styled";

const ComicsList = () => {
  const { comicsListByCharacter } = useContext(SearchContext);

  return (
    <>
      <ModalContent>
        {comicsListByCharacter.length > 0
          ? comicsListByCharacter.map((item) => (
              <ComicsListCard key={item.id} item={item} />
            ))
          : "No hemos encontrado comics para este personaje"}
      </ModalContent>
    </>
  );
};

export default ComicsList;
