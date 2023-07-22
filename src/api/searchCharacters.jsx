import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiHash = import.meta.env.VITE_API_HASH;

const getCharacterByName = (search) => {
  return axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1000&nameStartsWith=${search}&apikey=${apiKey}&hash=${apiHash}`
  );
};

const getTotalNumberOfCharacters = () => {
  return axios.get(
    `https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=${apiKey}&hash=${apiHash}&limit=1`
  );
};

const getRandomCharacter = (randomIndex) => {
  return axios.get(
    `https://gateway.marvel.com/v1/public/characters?offset=${randomIndex}&ts=1000&apikey=${apiKey}&hash=${apiHash}&limit=1`
  );
};

export { getCharacterByName, getTotalNumberOfCharacters, getRandomCharacter };
