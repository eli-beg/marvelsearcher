import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiHash = import.meta.env.VITE_API_HASH;

const baseURL = "https://gateway.marvel.com/v1/public";

const getComicsByName = (search) => {
  return axios.get(
    `${baseURL}/comics?ts=1000&titleStartsWith=${search}&apikey=${apiKey}&hash=${apiHash}`
  );
};

const getComicsListById = (id) => {
  return axios.get(
    `${baseURL}/characters/${id}/comics?orderBy=onsaleDate&ts=1000&apikey=${apiKey}&hash=${apiHash}`
  );
};

const getComictById = (id) => {
  return axios.get(
    `${baseURL}/comics/${id}?ts=1000&apikey=${apiKey}&hash=${apiHash}`
  );
};

export { getComicsByName, getComicsListById, getComictById };
