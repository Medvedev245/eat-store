import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Clash Display', sans-serif; 
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  :root {
    --iq-header-title: rgba(34, 32, 46, 1);
    --iq-header-text: rgba(114, 110, 141, 1);
    --iq-brand-text: rgba(42, 37, 75, 1);
    ;
  }
`;
