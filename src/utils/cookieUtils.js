import Cookies from "js-cookie";

export const setCookie = (key, value) => {
  Cookies.set(key, value);
};

export const getCookie = (value) => {
  const cookieValue = Cookies.get(value);

  if (cookieValue) {
    return JSON.parse(cookieValue);
  }
};
