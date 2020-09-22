import React, {FC, RefObject, useEffect} from 'react';
import {MainBackground, MainBuildingImg, MainSection, MainSectionIntro, MainWrapper} from "./Main.styled";
import Logo from "./Logo/Logo";
import {Tween} from "react-gsap";
import Intro from "./Intro/Intro";
import contentImage from "../../assets/images/main-building.jpg";

interface IProps {
	currentProgress: number,
	contactRef: RefObject<HTMLDivElement> | null
}

const Main: FC<IProps> = ({currentProgress, contactRef}) => {
	useEffect(() => {
		let contactBlock = contactRef && contactRef.current || null;
		if(contactBlock){
			contactBlock.style.visibility = currentProgress === 0 ? 'hidden' : 'visible';
		}
	});
	return (
		<MainWrapper>
			<MainSection>
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
		</MainWrapper>);
};

export default Main;