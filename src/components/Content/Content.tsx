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
        const headerElementFixed = document.getElementsByClassName('header-fixed')[0] as HTMLElement;
        const headerAbsoluteElement = document.getElementsByClassName('header-absolute')[0] as HTMLElement;
        if (windowWidth < 576) {
            headerAbsoluteElement.style.opacity = String(1 - currentProgress);
            headerAbsoluteElement.style.visibility = currentProgress === 1 ? 'hidden' : 'visible';
            if (currentProgress > 0) {
                headerElementFixed.style.display = 'none';
                headerAbsoluteElement.style.display = 'block';

            } else if (currentProgress === 0) {
                headerElementFixed.style.display = 'block';
                headerAbsoluteElement.style.display = 'none';
            }
        } else {
            headerElementFixed.style.opacity = String(1 - currentProgress);
            headerElementFixed.style.visibility = currentProgress === 1 ? 'hidden' : 'visible';
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