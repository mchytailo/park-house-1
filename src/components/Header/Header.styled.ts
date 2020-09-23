import styled from "styled-components";
import {size} from "../../styles/Global.styled";

export const HeaderLinkFixed = styled.div` 
    font: normal normal normal 18px/55px Optima;
    letter-spacing: 5.4px;
    color: #fff;
    text-transform: uppercase;
    opacity: 1;
    position: fixed;
    top: 28px;
    right: 40px;
    z-index: 1000;
    cursor: pointer;
    text-decoration: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none !important;
    
    @media (min-width: ${size.laptop}) { 
        top: 48px;
    }
    
    @media (max-width: ${size.tablet}) {
        top: 78px;
        font: normal normal normal 16px/16px Optima;
        letter-spacing: 4.8px;
    }
    
    @media (max-width: ${size.tabletS}) { 
        top: 48px;
    }
    
    @media (max-width: ${size.mobile}) { 
        top: auto;
        bottom: 60px;
        right: 24px;
     }
    `