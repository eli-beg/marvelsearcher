import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const SearchIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      color={"#a8a8a8"}
      fontSize={"20px"}
    />
  );
};

export const FavIcon = () => {
  return <FontAwesomeIcon icon={faStar} color={"#a8a8a8"} fontSize={"25px"} />;
};
