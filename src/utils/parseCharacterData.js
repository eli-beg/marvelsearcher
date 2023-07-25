import { getImagePath } from "./getImagePath";

export const parseCharacterData = (character) => {
  return {
    id: character.id,
    name: character.name,
    urlImage: getImagePath(
      character.thumbnail.path,
      character.thumbnail.extension
    ),
    comicsUrls: character.comics.items,
    isFavorite: false,
  };
};
