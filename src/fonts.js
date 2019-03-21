import { createGlobalStyle } from 'styled-components'
import myFont from './assets/fonts/avenirltce95black-webfont.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PTC55F';
    src: url(${myFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;