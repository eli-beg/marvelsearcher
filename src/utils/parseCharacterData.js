import { getImagePath } from "./getImagePath";

export const parseCharacterData = (character) => {
  return {
    name: character.name,
    urlImage: getImagePath(
      character.thumbnail.path,
      character.thumbnail.extension
    ),
  };
};
