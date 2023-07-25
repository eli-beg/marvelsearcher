export const addAndRemoveFavorite = (array, id) => {
  const isFavorite = array.some((element) => element === id);
  return isFavorite
    ? { array: array.filter((element) => element !== id), operation: "remove" }
    : { array: [...array, id], operation: "add" };
};
