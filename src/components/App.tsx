import React, {FC, useRef} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {GlobalStyle} from '../styles/Global.styled';
import Main from "./Main/Main";
import Header from "./Header/Header";
import {MainWrapper} from "./Main/Main.styled";
import Content from "./Content/Content";

const App: FC = () => {
    const headerRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const windowWidth = window.innerWidth;
    return (
        <>
            <Header
                headerRef={headerRef}
                contactRef={contactRef}
            />
            <div className={'scrollmagic-container'}>
                <GlobalStyle/>
                <Controller>
                    <Scene
                        duration={windowWidth > 991.98 ? '100%' :
                            windowWidth < 576 ? '70%' : '30%'}
                        triggerHook={'onLeave'}
                    >
                        {function (progress: number) {
                            return (
                                <MainWrapper>
                                    <Main
                                        currentProgress={progress}
                                        contactRef={contactRef}
                                    />
                                </MainWrapper>
                            );
                        }}
                    </Scene>
                    <Scene
                        duration={'100%'}
                        triggerHook={'onEnter'}
                    >
                        {function (progress: number) {
                            return (
                                <div>
                                    <Content
                                        currentProgress={progress}
                                        contactRef={contactRef}
                                        windowWidth={windowWidth}
                                    />
                                </div>
                            );
                        }}
                    </Scene>
                </Controller>
            </div>
        </>
    );
}

export default App;