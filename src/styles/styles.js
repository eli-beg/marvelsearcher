import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CardFont';
    src: url('../assets/fonts/FontsFree-Net-sf-ui-text-regular-58646b56a688c.ttf') format('ttf');
  }

  body {
    font-family: 'CardFont', sans-serif;
  }
`;

export default GlobalStyle;
