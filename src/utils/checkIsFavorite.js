import { getCookie } from "./cookieUtils";

export const checkIsFavorite = (id) => {
  const cookieValue = getCookie("favorites");
  return cookieValue.find((element) => element === id);
};
