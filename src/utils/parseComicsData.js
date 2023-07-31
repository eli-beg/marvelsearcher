import { getImagePath } from "./getImagePath";

export const parseComicsData = (comicsArray) => {
  return comicsArray.map((comic) => {
    return {
      id: comic.id,
      title: comic.title,
      description: comic.description,
      urlImage: getImagePath(comic.thumbnail.path, comic.thumbnail.extension),
      isFavorite: false,
    };
  });
};
