import React, {FC} from 'react';
import {LogoIcon, LogoWrapper} from "./Logo.styled";
import logoIcon from '../../../assets/images/logo-full.svg'

const Logo: FC = () => {
    return (
        <LogoWrapper>
            <LogoIcon src={logoIcon}/>
        </LogoWrapper>
    )
}

export default Logo;