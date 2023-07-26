import { styled } from "styled-components";

const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  color: ${(props) => props.theme.light};
`;
const Subtext = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.light};
`;

const Description = styled.p`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: 400;
  line-height: 1.4;
  color: ${(props) => props.theme.light};
`;
const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CoverShadowImageToTop = styled.div`
  position: absolute;
  width: 256px;
  height: 380px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 20%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const theme = {
  light: "#3E3E3E",
  dark: "red",
};
const invertTheme = {
  light: "red",
  dark: "#3E3E3E",
};

export {
  theme,
  Title,
  Subtext,
  Description,
  invertTheme,
  CoverShadowImageToTop,
  MainContainer,
};
