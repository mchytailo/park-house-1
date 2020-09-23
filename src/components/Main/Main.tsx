import React, {FC, RefObject, useEffect} from 'react';
import {MainBackground, MainBuildingImg, MainSection, MainSectionIntro, MainWrapper} from "./Main.styled";
import Logo from "./Logo/Logo";
import {Tween} from "react-gsap";
import Intro from "./Intro/Intro";
import contentImage from "../../assets/images/main-building.jpg";
import {HeaderLink} from "../Header/Header.styled";

interface IProps {
    currentProgress: number,
    contactRef: RefObject<HTMLDivElement> | null
}

const Main: FC<IProps> = ({currentProgress, contactRef}) => {
    useEffect(() => {
        let contactBlock = contactRef && contactRef.current || null;
        if (contactBlock) {
            contactBlock.style.visibility = currentProgress === 0 ? 'hidden' : 'visible';
        }
    });

    const executeScroll = () => {
        window.scrollTo({
            top: contactRef && contactRef.current && contactRef.current.offsetTop || 0,
        })
    }

    return (
        <MainWrapper>
            <MainSection
                style={{pointerEvents: currentProgress === 1 ? 'none' : 'auto'}}
            >
                <Tween
                    from={{opacity: 1}}
                    to={{opacity: 0}}
                    paused
                    totalProgress={currentProgress}
                >
                    <MainSectionIntro>
                        <Logo/>
                    </MainSectionIntro>
                </Tween>

                <Tween
                    from={{
                        opacity: 1,
                        x: 0
                    }}
                    to={{
                        opacity: 0,
                        x: '-40vw'
                    }}
                    paused
                    totalProgress={currentProgress}
                >
                    <div style={{
                    }}>
                        <Intro/>
                    </div>
                </Tween>
            </MainSection>
            <MainBackground>
                <MainBuildingImg
                    src={contentImage}
                    alt=""
                />

                <HeaderLink
                    onClick={executeScroll}
                    className={'header-absolute'}
                    style={{position: 'absolute', display: 'none'}}
                >Contact</HeaderLink>
            </MainBackground>
        </MainWrapper>);
};

export default Main;