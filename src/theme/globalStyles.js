import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4{
    margin: 0;
    font-family: "Montserrat",Open-Sans, Helvetica, Sans-Serif;
  }
  body {
    margin: 0;
    padding: 0;
    background: #eee;
    font-family: "Montserrat",Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;