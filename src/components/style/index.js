import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  body,
  div#root {
    min-height: 100vh;
  }

  body {
    background-color: #f5f8fa;
    font-family: ${({
      theme: {
        typography: { main },
      },
    }) => main};
    font-size: 16px;
  }

  div#root {
    display: flex;
  }
`;
