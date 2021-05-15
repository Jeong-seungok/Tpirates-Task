import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
  }
  html,body{
    height: 100%;
  }
  body{
    background: ${theme.color.black};
    font-family: 'Noto Sans KR', sans-serif;
  }
  #wrap{
    max-width: 420px;
    min-width: 360px;
    min-height: 100%;
    margin: 0 auto;
    background: #eee;
  }
  img{
    width:100%;
  }
  a{
    color:#000;
    text-decoration:none;
  }
`;

export default GlobalStyle;
