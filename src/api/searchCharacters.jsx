import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiHash = import.meta.env.VITE_API_HASH;

const getCharacterByName = () => {
  return axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1000&nameStartsWith=spider&apikey=${apiKey}&hash=${apiHash}`
  );
};

const getRandomCharacter = async () => {
  try {
    const numberOfCharacters = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=${apiKey}&hash=${apiHash}&limit=1`
    );

    if (numberOfCharacters) {
      const data = numberOfCharacters.data.data.total;
      const randomIndex = Math.floor(Math.random() * data) + 1;
      return await axios.get(
        `http://gateway.marvel.com/v1/public/characters?offset=${randomIndex}&ts=1000&apikey=${apiKey}&hash=${apiHash}&limit=1`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export { getCharacterByName, getRandomCharacter };
