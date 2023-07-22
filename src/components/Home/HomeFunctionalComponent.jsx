import { useCallback, useEffect, useState } from "react";
import {
  getRandomCharacter,
  getTotalNumberOfCharacters,
} from "../../api/searchCharacters";
import { getRandomIndex } from "../../utils/getRandomIndex";
import { parseCharacterData } from "../../utils/parseCharacterData";
import CardsGridComponent from "../CardsGrid/CardsGridComponent";

const HomeFunctionalComponent = () => {
  const [randomCharacter, setRandomCharacter] = useState([]);

  const getNumberOfCharacters = useCallback(async () => {
    try {
      const { data } = await getTotalNumberOfCharacters();
      const total = data.data.total;
      if (total) {
        const randomIndex = getRandomIndex(total);
        const { data } = await getRandomCharacter(randomIndex);
        if (data.data.results.length >= 1) {
          const character = parseCharacterData(data.data.results[0]);
          setRandomCharacter([character]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getNumberOfCharacters();
  }, [getNumberOfCharacters]);

  return (
    <>{randomCharacter && <CardsGridComponent items={randomCharacter} />}</>
  );
};

export default HomeFunctionalComponent;
