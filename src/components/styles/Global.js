import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.textColor}
  }

  body {
    font-family: 'Nunito sans', sans-serif;
  }
`
export default GlobalStyles;
