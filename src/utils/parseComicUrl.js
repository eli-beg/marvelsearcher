// This function returns an array of comics ids
export const parseComicUrl = (url) => {
  const splitResult = url.split("/");
  return splitResult[5];
};
