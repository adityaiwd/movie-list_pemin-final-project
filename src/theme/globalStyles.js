import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,p{
    margin: 0;
    font-family: "Montserrat",Open-Sans, Helvetica, Sans-Serif;
  }
  html {
    height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    margin: 0;
    padding: 0;
    background: #f7f7f7;
    font-family: "Montserrat",Open-Sans, Helvetica, Sans-Serif;

  }
`;
 
export default GlobalStyle;