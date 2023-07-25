export const addAndRemoveFavorite = (array, id) => {
  const isFavorite = array.some((element) => element === id);
  return isFavorite
    ? array.filter((element) => element !== id)
    : [...array, id];
};
