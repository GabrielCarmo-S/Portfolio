import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--primary);
    
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;

    overflow-x: hidden;
    overflow: overlay;

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--twitter);
      border-radius: 7px;
    }

  }
  *, button, input{
    border: 0;
    background: none;
    font-family: --apple-system, system-ui, sans-serif;
  }
  html{
    background: var(--white);
  }
  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #f8f8f8;
    --gray: rgb(56, 56, 56);
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }
`;
