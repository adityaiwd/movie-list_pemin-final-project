import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4,p{
    margin: 0;
    padding: 0;
    font-family: "Montserrat",Open-Sans, Helvetica, Sans-Serif;
  }
  html {
    font-size:62.5%;
    @media only screen and (max-width:62.5em){
        font-size: 56.25%;
    } 
    @media only screen and (max-width:56.25em){
        font-size: 50%;
    } 
    @media only screen and (max-width:37.5em){
        font-size: 43.75%;
    } 
  }
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #f7f7f7;
    font-family: "Montserrat",Open-Sans, Helvetica, Sans-Serif;

  }
`;
 
export default GlobalStyle;