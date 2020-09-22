import styled from "styled-components";
import {size} from "../../../styles/Global.styled";

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    padding-left: 170px;
    max-width: 560px;
    transition: .3s;
    @media (max-width: ${size.laptop}) { 
        padding-left: 90px;
    }
    @media (max-width: ${size.tablet}) {    
        padding-left: 10%;
        padding-right: 10%;
    }
    
    @media (max-width: ${size.mobile}) { 
        padding-left: 0;
        padding-right: 0;
    }
    `
export const IntroText = styled.p`
    margin: 0;
    text-align: left;
    font: normal normal normal 25px/40px Optima;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-bottom: 56px;
    
    @media (max-width: ${size.laptop}) {
        font: normal normal normal 22px/34px Optima;
        margin-bottom: 40px;
    }
    @media (max-width: ${size.mobile}) { 
        font: normal normal normal 18px/32px Optima;
    }
    `

export const IntroLabel = styled.p`
    margin: 0;
    text-align: left;
    font: normal normal normal 22px/40px Optima;
    letter-spacing: 5.5px;
    color: #FFFFFF;
    text-transform: uppercase;
    @media (max-width: ${size.laptop}) {
        font: normal normal normal 18px/32px Optima;
        letter-spacing: 4.5px;
    }
    
    @media (max-width: ${size.mobile}) { 
        font: normal normal normal 14px/28px Optima;
        letter-spacing: 2.58px;
    }
    `