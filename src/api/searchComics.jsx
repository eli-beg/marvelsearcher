import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiHash = import.meta.env.VITE_API_HASH;

const getComicsByName = (search) => {
  return axios.get(
    `https://gateway.marvel.com:443/v1/public/comics?ts=1000&titleStartsWith=${search}&apikey=${apiKey}&hash=${apiHash}`
  );
};

const getComicsById = (id) => {
  return axios.get(
    `https://gateway.marvel.com/v1/public/comics/${id}?ts=1000&apikey=${apiKey}&hash=${apiHash}`
  );
};

export { getComicsByName, getComicsById };
