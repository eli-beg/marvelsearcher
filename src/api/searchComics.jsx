import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiHash = import.meta.env.VITE_API_HASH;

const getComicsByName = (search) => {
  return axios.get(
    `https://gateway.marvel.com:443/v1/public/comics?ts=1000&titleStartsWith=${search}&apikey=${apiKey}&hash=${apiHash}`
  );
};

export { getComicsByName };
