import React, {FC, RefObject} from 'react';
import {HeaderLink, HeaderLinkFixed} from "./Header.styled";

interface IProps {
    contactRef: RefObject<HTMLDivElement> | null
}

const Header: FC<IProps> = ({contactRef}) => {
    const executeScroll = () => {
        window.scrollTo({
        top: contactRef && contactRef.current && contactRef.current.offsetTop || 0,
    })}

    return (
        <HeaderLink
            onClick={executeScroll}
            className={'header-fixed'}
            style={{position: 'fixed'}}
        >Contact</HeaderLink>
    )
}

export default Header;