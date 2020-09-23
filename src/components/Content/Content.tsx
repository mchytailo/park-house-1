import React, {FC, RefObject, useEffect} from 'react';
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import {ContentSection, ContentWrapper} from "./Content.styled";

interface IProps {
    contactRef: RefObject<HTMLDivElement> | null,
    windowWidth: number,
    currentProgress: number
}

const Content: FC<IProps> = ({contactRef, windowWidth, currentProgress}) => {
    useEffect(() => {
        const headerElement = document.getElementsByClassName('header-fixed')[0] as HTMLElement
        if (headerElement) {
            headerElement.style.opacity = String(1 - currentProgress);
            headerElement.style.visibility = currentProgress === 1 ? 'hidden' : 'visible';
            if (currentProgress > 0 && windowWidth < 576) {
                headerElement.style.bottom = 'calc(' + (currentProgress * 100) + 'vh + 40px)';
            }
        }
    })
    return (
        <ContentWrapper
            ref={contactRef}
        >
            <ContentSection
                style={{position: currentProgress === 1 ? 'relative' : 'fixed'}}>
                <Contact
                    contactRef={contactRef}
                    windowWidth={windowWidth}
                />
                <Footer/>
            </ContentSection>
        </ContentWrapper>
    )
}

export default Content;