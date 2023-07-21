import { useCallback, useEffect, useState } from "react";
import {
  getRandomCharacter,
  getTotalNumberOfCharacters,
} from "../../api/searchCharacters";
import { getRandomIndex } from "../../utils/getRandomIndex";
import { CardItem } from "../CardItem/CardItem";
import { parseCharacterData } from "../../utils/parseCharacterData";

const HomeFunctionalComponent = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);

  const getNumberOfCharacters = useCallback(async () => {
    try {
      const { data } = await getTotalNumberOfCharacters();
      const total = data.data.total;
      if (total) {
        const randomIndex = getRandomIndex(total);
        const { data } = await getRandomCharacter(randomIndex);
        if (data.data.results.length >= 1) {
          const character = parseCharacterData(data.data.results[0]);
          setRandomCharacter(character);
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
    <>
      {randomCharacter && (
        <CardItem
          name={randomCharacter.name}
          urlImage={randomCharacter.urlImage}
        />
      )}
    </>
  );
};

export default HomeFunctionalComponent;
