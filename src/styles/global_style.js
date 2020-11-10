import { createGlobalStyle } from 'styled-components';

const Global_style = createGlobalStyle`
  html, body {
    height: auto;
    font-family: 'Noto Sans TC', sans-serif;
    font-display: optional;
    font-size: 16px;
    color: #1d1d1f;
    background-color: #fff;
    user-select: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default Global_style;
