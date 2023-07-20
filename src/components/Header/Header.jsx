import { useCallback, useEffect } from "react";
import {
  getCharacterByName,
  getRandomCharacter,
} from "../../api/searchCharacters";

const Header = () => {
  const getSpider = useCallback(async () => {
    try {
      const data = await getCharacterByName();
      console.log(data.data.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getRandom = useCallback(async () => {
    const data = await getRandomCharacter();
    console.log(data.data.data.results);
  }, []);

  useEffect(() => {
    getSpider();
    getRandom();
  }, [getSpider, getRandom]);

  return (
    <div>
      <h3>prueba input</h3>
      <input />
    </div>
  );
};

export default Header;
