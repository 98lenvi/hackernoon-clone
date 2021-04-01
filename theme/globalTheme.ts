import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  html {
    line-height: 1.666;
    font-size: 10px;
    @media (max-width: ${(_) => _.theme.breakpoints.sm}) {
      font-size: 8px;
    }
  }
  body {
    background-color: ${(props) => props.theme.colors.secondary[0]};
    color: ${(props) => props.theme.colors.secondary.text1};
    font-family: ${(props) => props.theme.fontFamily.primary};
    margin: 0;
  }
  a {
    padding: 2px 0px 1px;
    background-image: linear-gradient(transparent 0%, transparent calc(50% - 9px), rgba(0, 255, 0, 0.35) calc(50% - 9px), rgba(0, 255, 0, 0.35) 100%);
    transition: background-position 120ms ease-in-out 0s, padding 120ms ease-in-out 0s;
    background-size: 100% 200%;
    background-position: 0px 0px;
    word-break: break-word;
    color: rgb(60, 60, 59);
    text-decoration: none;
    outline: none;
    &:hover {
      background-color: ${props => props.theme.colors.primary[500]};
    }
  }
  h1, h2, h3 {
    font-family: ${(props) => props.theme.fontFamily.secondary};
    line-height: 1.4;
    letter-spacing: 0px;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  blockquote {
    font-size: 2.5rem;
    font-style: italic;
    padding: 2rem 0px;
    text-align: center;
    margin: 0;
  }
  code {
    font-family: monospace, monospace;
    white-space: pre-wrap;
    font-size: 1.5rem;
  }
  iframe {
    max-width: 100%;
  }
  p {
      margin: 0;
    }
  pre {
    display: inline;
    font-family: monospace;
    background-color: rgb(238, 238, 238);
    padding: 3px;
    white-space: pre-wrap;
    line-height: 1.6;
    overflow-x: scroll !important;
    white-space: pre-wrap;
    code {
      font-family: monospace, monospace;
      white-space: pre-wrap;
      font-size: 1.5rem;
    }
  }
  .code-container {
      min-width: 0;
  }
`;

export default GlobalStyle;
