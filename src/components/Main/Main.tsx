import React, {FC, RefObject} from 'react';
import {MainBackground, MainBuildingImg, MainSection, MainWrapper} from "./Main.styled";
import Logo from "./Logo/Logo";
import {Tween} from "react-gsap";
import Intro from "./Intro/Intro";
import contentImage from "../../assets/images/main-building.jpg";

interface IProps {
    currentProgress: number,
    contentMainRef: RefObject<HTMLDivElement> | null
}

const Main: FC<IProps> = ({currentProgress, contentMainRef}) => {
    return (
        <MainWrapper ref={contentMainRef}>
            <MainSection>
                <Tween
                    from={{opacity: 1}}
                    to={{opacity: 0}}
                    paused
                    totalProgress={currentProgress}
                >
                    <div>
                        <Logo/>
                    </div>
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
                    <div>
                        <Intro/>
                    </div>
                </Tween>
            </MainSection>
            <MainBackground>
                <MainBuildingImg
                    src={contentImage}
                    alt=""
                />
            </MainBackground>
        </MainWrapper>)
}

export default Main;