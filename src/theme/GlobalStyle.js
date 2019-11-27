import { createGlobalStyle } from "styled-components";
import background from "assets/images/beige-tiles.png";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,600");

  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html{ font-size: 62.5%; }

  body{
    background: url(${background});
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
  }

  #root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default GlobalStyle;
