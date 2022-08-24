import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
     --azul: #0F52BA;
     --branco: #FFFFFF;
     --preto: #373737;
     --cinzaClaro: #E5E5E5;
     --cinzaEscuro: #EEEEEE;
 }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  html,body {
    width: 100vw;
    height: 100vh;
  }
  body {
    background-color: var(--cinzaClaro);
    overflow-x: hidden;
  }
`;
