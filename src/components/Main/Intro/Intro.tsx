import React, {FC} from 'react';
import {IntroLabel, IntroText, IntroWrapper} from "./Intro.styled";

const Intro: FC = () => {
    return (
        <IntroWrapper>
            <IntroText>
                Newport Beach residences designed for effortless living. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aliquid eos et illum odit praesentium quod reiciendis soluta
                temporibus ut vero.
            </IntroText>
            <IntroLabel>Luxury condominium residences</IntroLabel>
            <IntroLabel>Starting from $1.9M</IntroLabel>
            <IntroLabel>Sales begin early 2021</IntroLabel>
        </IntroWrapper>
    )
}

export default Intro;