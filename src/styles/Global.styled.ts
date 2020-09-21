import {createGlobalStyle} from "styled-components";
import OptimaFontBoldttf from '../assets/fonts/optima/Optima Medium.ttf';
import OptimaFontNormalttf from '../assets/fonts/optima/OPTIMA.ttf';
import OptimaFontBoldwoff from '../assets/fonts/optima-webfont/Optima Medium.woff';
import OptimaFontNormalwoff from '../assets/fonts/optima-webfont/OPTIMA.woff';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Optima', sans-serif;
    margin: 0;
    padding: 0;
    background: white;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  @font-face {
        font-family: 'Optima';
        src: 
        url(${OptimaFontNormalttf}) format('ttf'),
        url(${OptimaFontNormalwoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
  @font-face {
        font-family: 'Optima';
        src: 
        url(${OptimaFontBoldttf}) format('ttf'),
        url(${OptimaFontBoldwoff}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
`;
export const size = {
    mobile: '575.98px',
    tabletS: '767.98px',
    tablet: '991.98px',
    laptop: '1199.98px',
    desktop: '1199.98px'
}
