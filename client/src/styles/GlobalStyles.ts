import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --background: #5d80d6;
    --box: #36393f;
    --input-border: #707070;
    --white: #fff;
    --link: #6e86d6;
    --gray: #8a8c90;
    --notification: #f84a4b;
  }
`;
