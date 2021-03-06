import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    background-color: #ffffff;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    /* background-color: transparent; */
    outline: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }

  ol, ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
