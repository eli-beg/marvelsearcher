export const parseCreactorsComic = (creatorsArray) => {
  const creators = {
    writer: "",
    penciler: "",
    coverArtist: "",
  };
  creatorsArray.map((comic) => {
    switch (comic.role) {
      case "writer":
        creators.writer = comic.name;
        break;
      case "penciler (cover)":
        creators.penciler = comic.name;
        creators.coverArtist = comic.name;
        break;

      default:
        break;
    }
  });
  return creators;
};
