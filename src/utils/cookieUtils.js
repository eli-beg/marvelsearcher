import Cookies from "js-cookie";

export const setCookie = (value) => {
  Cookies.set("favorites", value);
};

export const getCookie = (value) => {
  const cookieValue = Cookies.get(value);
  return cookieValue !== undefined ? JSON.parse(cookieValue) : null;
};
