import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: underline;
    color: inherit;
    font-size: inherit;
  }

  img, input, button, select, textarea {
    border: 0;
    outline: none;
    background: transparent; 
  }

  ul,ol,dl,li,dt,dd {
    list-style: none;
  }
`;

export default GlobalStyles;
