import styled from "styled-components";
import {size} from "../../styles/Global.styled";

export const FooterSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: white;
    
    @media (min-width: ${size.laptop}) { 
        padding: 56px 100px 28px;
    }
    
    @media (max-width: ${size.tablet}) {
        padding: 40px 40px 0;
    }
    
    @media (max-width: ${size.mobile}) { 
        padding: 40px 16px 0;
    }
    
    `

export const FooterLogoBlock = styled.div`
    margin: 0 0 24px 0;
    `

export const FooterLogo = styled.img`
    width: 96px;
    height: auto;
    `

export const FooterText = styled.p`
    text-align: left;
    font: normal normal normal 14px/20px Optima;
    letter-spacing: 0px;
    color: #797972;
    margin: 0 0 24px 0;
    `