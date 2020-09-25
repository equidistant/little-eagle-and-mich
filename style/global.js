import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lobster';
    src: url('/fonts/Lobster.ttf');
  }
  @font-face {
    font-family: 'Mulish';
    src: url('/fonts/Mulish.ttf');
  }
  @font-face {
    font-family: 'Mulish';
    font-weight: bold;
    src: url('/fonts/Mulish-Bold.ttf');
  }
  @font-face {
    font-family: 'Poppins';
    font-weight: normal;
    src: url('/fonts/Poppins.ttf');
  }
  @font-face {
    font-family: 'Indie Flower';
    src: url('/fonts/IndieFlower.ttf');
  }
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    height: 100%;
    min-height: 100%;
  }
  #root {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  textarea {
    resize: none;
  }
`

export default GlobalStyle
