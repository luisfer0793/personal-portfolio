import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    box-sizing: border-box;
    --primary-black: #0b1015;
    --primary-white: #f5f5f5;
    --primary-red: #ff4262;
    --secondary-black: #454545;
    --secondary-red: #fa5d77;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Catamaran', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.02rem;
    word-spacing: 0.1rem;
    color: var(--primary-black);
  }
`;

export default GlobalStyle;