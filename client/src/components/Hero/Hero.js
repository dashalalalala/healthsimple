import "./Hero.scss";
import heroIcon from "../../assets/icons/undraw_workout.svg";

import { Highlight, Text } from "@chakra-ui/react";

function Hero() {
	return (
		<div className="hero">
			<Text
				className="hero__tagline"
				bgGradient="linear(to-l, #ADB6FF, #63B3ED)"
				bgClip="text"
				fontSize="6l"
				fontWeight="extrabold"
			>
				Become the best version of yourself.
			</Text>
			<h3>
				<Highlight
					query={["essential"]}
					styles={{ px: "1", py: "1", bg: "blue.100" }}
				>
					Maintaining healthy habits is essential for overall well-being and
					longevity, but it can be challenging to develop new habits or give up
					bad ones.
				</Highlight>
				<br />
				<Highlight
					query={["personalized insights"]}
					styles={{ px: "1", py: "1", bg: "blue.100" }}
				>
					Healthsimple delivers personalized insights on the benefits of keeping
					up with each habit.
				</Highlight>
			</h3>
			<img className="hero__icon" src={heroIcon} alt=""></img>
			<button className="hero__button">ACCEPT THE CHALLENGE</button>
		</div>
	);
}

export default Hero;
