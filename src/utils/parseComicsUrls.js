// This function returns an array of comics ids
export const parseComicsUrls = (arrayUrls) => {
  return arrayUrls.map((comic) => {
    const splitResult = comic.resourceURI.split("/");
    return splitResult[splitResult.length - 1];
  });
};
