import { parseCreactorsComic } from "./parseCreatorsComic";
import { getImagePath } from "./getImagePath";

export const parseComicDataPreview = (comic) => {
  return {
    id: comic.id,
    title: comic.title,
    creators: parseCreactorsComic(comic.creators.items),
    description: comic.description,
    urlImage: getImagePath(comic.thumbnail.path, comic.thumbnail.extension),
  };
};
