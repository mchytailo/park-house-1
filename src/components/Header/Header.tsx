import React, {FC, RefObject} from 'react';
import {HeaderLinkFixed} from "./Header.styled";

interface IProps {
    contactRef: RefObject<HTMLDivElement> | null
}

const Header: FC<IProps> = ({contactRef}) => {
    const executeScroll = () => {
        window.scrollTo({
        top: contactRef && contactRef.current && contactRef.current.offsetTop || 0,
    })}

    return (
        <HeaderLinkFixed
            onClick={executeScroll}
            className={'header-fixed'}
        >Contact</HeaderLinkFixed>
    )
}

export default Header;