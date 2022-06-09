import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    font-size: 12pt;
    background: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  img {
    width: 100%;
    height: auto;
  }

a {
  color: #000;
}



`;

export default GlobalStyle;