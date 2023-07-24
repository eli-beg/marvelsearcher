const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-Es", options);
};

export const parseDateComic = (dateArray) => {
  return dateArray
    .filter((date) => date.type === "onsaleDate")
    .map((date) => formatDate(date.date));
};
