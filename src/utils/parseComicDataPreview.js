import { parseCreactorsComic } from "./parseCreatorsComic";
import { getImagePath } from "./getImagePath";
import { parseDateComic } from "./parseDateComic";

export const parseComicDataPreview = (comic) => {
  return {
    id: comic.id,
    title: comic.title,
    date: { published: parseDateComic(comic.dates) },
    creators: parseCreactorsComic(comic.creators.items),
    description: comic.description,
    urlImage: getImagePath(comic.thumbnail.path, comic.thumbnail.extension),
    isFavorite: false,
  };
};
