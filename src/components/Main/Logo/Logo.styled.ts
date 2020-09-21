import styled from "styled-components";
import {size} from "../../../styles/Global.styled";

export const LogoWrapper = styled.div`
    display: flex;
    margin-bottom: 80px;
    transition: 1s;
    max-width: 100%;
    width: 360px;
    max-width: 720px;
    @media (max-width: ${size.desktop}) {
        max-width: 400px;
    }
    @media (min-width: ${size.tablet}) {
        width: 100%;
    }
    @media (max-width: ${size.tabletS}) { 
        max-width: 330px;
        width: 100%;
    }
    
    @media (max-width: ${size.mobile}) { 
        max-width: none;
        margin-bottom: 20px;
    }
    `
export const LogoIcon = styled.img`
    width: 100%;
    `