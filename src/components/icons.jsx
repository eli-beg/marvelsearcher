import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const SearchIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faMagnifyingGlass}
      color={"#a8a8a8"}
      fontSize={"20px"}
    />
  );
};

export const FavIcon = (props) => {
  const { color, size, isFilled } = props;
  return (
    <FontAwesomeIcon
      icon={isFilled ? solidStar : regularStar}
      color={color}
      fontSize={size}
    />
  );
};

export const CloseIcon = (props) => {
  const { color, size } = props;
  return <FontAwesomeIcon icon={faXmark} fontSize={size} />;
};
