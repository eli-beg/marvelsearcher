import { useCallback, useEffect, useState } from "react";
import {
  getRandomCharacter,
  getTotalNumberOfCharacters,
} from "../../api/searchCharacters";
import { getRandomIndex } from "../../utils/getRandomIndex";

const HomeFunctionalComponent = () => {
  const [randomCharacter, setRandomCharacter] = useState({});

  const getNumberOfCharacters = useCallback(async () => {
    try {
      const { data } = await getTotalNumberOfCharacters();
      if (data.data.total) {
        const randomIndex = getRandomIndex(data.data.total);
        const { data } = await getRandomCharacter(randomIndex);
        if (data.data.results.length >= 1) {
          setRandomCharacter(data.data.results[0]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(randomCharacter);

  useEffect(() => {
    getNumberOfCharacters();
  }, [getNumberOfCharacters]);

  return <div>hola homeee</div>;
};

export default HomeFunctionalComponent;
