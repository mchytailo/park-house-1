import styled from "styled-components";
import {size} from "../../styles/Global.styled";

export const MainWrapper = styled.div`
    height: 200vh;
    position: relative;
    z-index: 1;
    @media (max-width: ${size.tablet}) { 
        height: 130vh;
    }
    @media (max-width: ${size.mobile}) { 
        height: 185vh;
    }
    `
export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-height: 780px;
    padding: 128px 140px 200px;
    height: calc(100% - 328px);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    
    @media (max-width: ${size.laptop}) {
        height: auto;
        max-height: 500px;
        padding: 100px 140px;
    }
    
    @media (max-width: ${size.tablet}) {
        padding: 70px 5%;
    }
    @media (max-width: ${size.mobile}) {
        justify-content: initial;
        padding: 30px 5%;
    }
    `
export const MainBackground = styled.div`
    bottom: 0;    
    width: 100%;
    height: 200vh;
    @media (max-width: ${size.tablet}) { 
        height: 130vh;
    }
    @media (max-width: ${size.mobile}) { 
        height: 185vh;
    }
    `

export const MainBuildingImg = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    min-height: 100%;
    min-width: 104vh;
    object-fit: cover;
    object-position: 0;
    `

export const MainSectionIntro = styled.div`
    @media (max-width: ${size.mobile}) {
        margin: 20px 0 40px; 
        display: flex;
        align-items: center;
    }
    `