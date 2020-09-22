import styled from "styled-components";
import arrowIcon from "../../assets/images/icon-dropdown-arrow.svg";
import {size} from "../../styles/Global.styled";

export const ContactSection = styled.div`  
    padding: 40px;
    background: #9EA69C;
    @media (min-width: ${size.laptop}) { 
        padding: 80px 100px;
    }

    @media (max-width: ${size.mobile}) { 
        padding: 40px 16px;
    }
    .ao-form {
        input[type=checkbox], input[type=radio] {
            display: none;
        }
        input[type=checkbox]+span:before, 
        input[type=radio]+span:before {
            content: "";
            border: 1px solid #fff;
            width: 22px;
            height: 22px;
            display: block;
            transition: all .5s ease-in-out;
            margin-right: 10px;
            box-shadow: inset 0 0 0 1px #fff;
            flex: 0 0 22px;
            position: absolute;
            left: 0;
        }
        
        input[type=checkbox]+span, 
        input[type=radio]+span {
            display: block;
            font: normal normal bold 16px/24px Optima;
            letter-spacing: 4.32px;
            padding-left: 30px;
            position: relative;
            cursor: pointer;
            color: white;
            @media (min-width: 1500px) { 
                letter-spacing: 4px;
                font: normal normal bold 18px/24px Optima ;
            }
        }
        
        input[type=checkbox]:checked+span:before,
        input[type=radio]:checked+span:before {
            box-shadow: inset 0 0 0 6px rgb(158, 166, 156);
            background: #fff;
        }
        
        .ao-form-label, .ao-combo-label {
            text-align: left;
            font: normal normal bold 18px/24px Optima ;
            letter-spacing: 4px;
            color: #fff;
            text-transform: uppercase;
            white-space: nowrap;
            color: white;
            user-select: none;
            
            @media (max-width: 1500px) { 
                font: normal normal bold 16px/24px Optima;
                letter-spacing: 1.3px;
            }
            @media (max-width: ${size.tablet}) {
                letter-spacing: 4px;
            }
        }
        .ao-form-label {
            margin-bottom: 8px;
            @media (max-width: ${size.tablet}) {
                margin-bottom: 0;
            }
        }
        
        .ao-column-4 .ao-column-inner:nth-child(1){
            padding: 0px 50px 0px 0px;
            
            @media (max-width: ${size.tablet}) {
                padding: 0;
            }
        }
        .ao-input-block, .ao-combo-block{
            max-width: 400px;
            position: relative;
            
            @media (max-width: ${size.tablet}) {
                max-width: none;
            }
            
            .ao-form-error-message {
                color: red;
            }
        }
        
         @media (max-width: 1500px) {
            .ao-block-wrapper {
                padding: 0 !important;
            }
         }
        .ao-form-field {
            background: #889287 ;
            border: none;
            border-radius: 0 !important;
            padding: 20px !important;
            font: normal normal normal 20px / 26px Optima !important;
            letter-spacing: 2px;
            color: white;
            
            &:focus {
                background: #434B42;
            }
            @media (max-width: ${size.laptop}) {
                font: normal normal normal 18px / 24px Optima !important;
                padding: 16px !important;
            }
            @media (max-width: ${size.tablet}) {
               font: normal normal normal 16px/22px Optima;
            }
        }
        
        select.ao-form-field {
            cursor: pointer;
        }
        
        .ao-column.ao-column-4 {
            max-width: 450px;
            
            @media (max-width: ${size.laptop}) {
                max-width: none;
            }
        }
        .ao-column.ao-column-4:nth-child(3) {
            margin-left: auto;
        }
        .ao-column.ao-column-4:nth-child(2) {
            .ao-combo-block:after{
                cursor: pointer;
                content: "";
                position: absolute;
                width: 16px;
                height: 10px;
                background: url(${arrowIcon}) 50% 50%;
                right: 24px;
                top: 50%;
                background-size: 100%;
                background-repeat: no-repeat;
                pointer-events: none;
            }
        }
        .ao-row:nth-child(1) {
        
            @media (max-width: ${size.laptop}) {
                display: flex;
                flex-wrap: wrap;
                
                .ao-column.ao-column-4 {
                    width: 50% !important;
                }
                
                .ao-column.ao-column-4:nth-child(3) {
                    width: 100% !important;
                    margin: 0;
                    
                    .ao-column-inner {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        padding: 0;
                        > .ao-block-wrapper {    
                            width: 50%;
                        }
                    }
                    
                }  
            }
        
            @media (max-width: ${size.tablet}) {
                .ao-column.ao-column-4 {
                    width: 100%  !important;
                    
                    &:nth-child(2) {
                        margin-top: 16px;
                        max-width: none;
                        @media (max-width: ${size.tablet}) { 
                            margin-top: 0;
                        }
                        .ao-column-inner{
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                        
                            > .ao-block-wrapper:nth-child(1),
                            > .ao-block-wrapper:nth-child(2){
                                width: calc(50% - 12px);
                                
                                @media (max-width: ${size.mobile}) { 
                                    width: 100%;
                                }
                            }
                            > .ao-block-wrapper:nth-child(3){
                                width: 100%;
                            }
                        }
                    }
                }
                .ao-column-inner {
                    padding: 0 !important;
                }
                
                .ao-column.ao-column-4:nth-child(3) {
                    .ao-column-inner {
                        flex-direction: column;
                        
                        > .ao-block-wrapper {    
                            width: 100%;
                            margin-top: 0;
                        }
                    }
                    
                }  
            }
        
            .ao-column:nth-child(3) .ao-column-inner {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .ao-combo-block {
                    .ao-form-label {
                        margin-bottom: 24px;
                        @media (max-width: ${size.tablet}) { 
                            margin-bottom: 14px;
                        }
                    }
                    .ao-combo-label {
                        display: flex;
                        align-items: center;
                        margin-right: 35px;
                        
                        input{
                            margin: 0 8px 0 0;
                        }
                    }
                    
                    &:nth-child(1) .ao-combo-layout {
                        display: flex;
                    }
                }
                .ao-block-wrapper:nth-child(2) .ao-combo-layout {
                    display: flex;
                    flex-direction: column;
                    .ao-combo-label {
                        margin-bottom: 24px;
                    }
                }
                .ao-combo-layout {
                    outline: none;
                }
            }
        }
        
        
        
        .ao-submit-block{
            margin-top: 60px;
               
            @media (max-width: ${size.laptop}) {
               margin-top: 30px;
            }
            @media (max-width: ${size.tablet}) {
               margin-top: 0;
            }
            > div {
                text-align: left !important;
            }
            
            button.ao-form-submit {
                font: normal normal normal 28px/28px Optima;
                letter-spacing: 7.39px;
                text-transform: uppercase;
                transition: .2s;
                outline: none;  
                padding: 20px 100px ;
                background: rgb(158, 166, 156) ;
                border: 3px solid white !important;
                color: white;
                &:hover{
                    background: white ;
                    color: rgb(158, 166, 156) 
                }
                @media (max-width: ${size.tablet}) {
                    width: 100%;
                }
            }
        
        }

        .ao-form-error-message {
            text-align: right;
            font: 16px / 20px Optima !important;
            letter-spacing: 1px;
            margin-top: 4px;
        }
        
        
        
        .ao-richtext-block{
            max-width: 1200px;
            margin: 0 auto;
            
            p{
                margin: 0;
            }
            p:nth-child(1){
                margin-bottom: 40px;
            }
            p:nth-child(2){
                font: normal normal normal 24px/41px Optima;
                letter-spacing: 2px;
                color: #fff;
                text-transform: uppercase;
                margin-bottom: 50px;
                @media (max-width: ${size.tablet}) { 
                    font: normal normal normal 18px/30px Optima;
                }
                @media (max-width: ${size.mobile}) { 
                    font: normal normal normal 16px/20px Optima;
                }
            }
        }
    }
    `
export const ContactText = styled.div`  
    text-align: left;
    font: normal normal normal 32px/40px Optima;
    letter-spacing: 0px;
    color: #FFFFFF;
    margin-bottom: 80px;
    user-select: none;
    @media (max-width: ${size.laptop}) {
       font: normal normal normal 24px/32px Optima;
       margin-bottom: 64px;
    }
    @media (max-width: ${size.tablet}) {
       font: normal normal normal 16px/22px Optima;
       margin-bottom: 40px;
    }
    
    `
export const ContactHeader = styled.h2`  
    font: normal normal normal 48px/48px Optima;
    letter-spacing: 12.67px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-bottom: 70px;
    
    user-select: none;
    @media (max-width: ${size.laptop}) {
       font: normal normal normal 36px/44px Optima;
       letter-spacing: 7px;
       margin-bottom: 34px;
    }
    @media (max-width: ${size.tablet}) {
       font: normal normal normal 28px/28px Optima;
       letter-spacing: 5px;
       margin-bottom: 24px;
    }
    `
export const ContactLine = styled.div`  
    height: 1px;
    background: #FFFFFF;
    margin-bottom: 70px;
    @media (max-width: ${size.tablet}) {
       margin-bottom: 40px;
    }
    `