import { getCookie } from "./cookieUtils";

export const checkIsFavorite = (keyName, id) => {
  const cookieValue = getCookie(keyName);
  return cookieValue.find((element) => element === id);
};
