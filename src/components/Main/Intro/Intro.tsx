import React, {FC} from 'react';
import {IntroHeader, IntroLabel, IntroText, IntroWrapper} from "./Intro.styled";

const Intro: FC = () => {
    return (
        <IntroWrapper>
            <IntroHeader>
                LIVE WITH EASE
            </IntroHeader>
            <IntroText>
                Introducing Parkhouse. Luxurious full floor and half floor boutique
                Newport Beach residences designed for absolute ease of living.
            </IntroText>
            <IntroLabel>3 BEDROOM AND PENTHOUSES</IntroLabel>
            <IntroLabel>STARTING FROM $1.9M</IntroLabel>
            <IntroLabel>SALES BEGIN EARLY 2021</IntroLabel>
        </IntroWrapper>
    )
}

export default Intro;