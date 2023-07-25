import { styled } from "styled-components";

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  color: ${(props) => props.theme.main};
`;
const Subtext = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.main};
`;

const Description = styled.p`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: 400;
  line-height: 1.4;
  color: ${(props) => props.theme.main};
  /* @media (max-width: 480px) {
    font-size: 10px;
  } */
`;

Title.defaultProps = {
  theme: {
    main: "#3E3E3E",
  },
};

const theme = {
  main: "#3E3E3E",
};

export { theme, Title, Subtext, Description };
