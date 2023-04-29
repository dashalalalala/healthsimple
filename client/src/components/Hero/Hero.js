import "./Hero.scss";
import heroIcon from "../../assets/icons/undraw_workout.svg";

import { Highlight } from "@chakra-ui/react";

function Hero() {
	return (
		<div className="hero">
			<h2 className="hero__tagline">Become the best version of yourself.</h2>
			<h3>
				<Highlight
					query={["essential", "personalized insights"]}
					styles={{ px: "1", py: "1", bg: "blue.100" }}
				>
					Maintaining healthy habits is essential for overall well-being and
					longevity, but it can be challenging to develop new habits or give up
					bad ones. Healthsimple delivers personalized insights on the benefits
					of keeping up with each habit.
				</Highlight>
			</h3>
      <img className="hero__icon" src={heroIcon}></img>
      <button className="hero__button">START TODAY</button> 
		</div>
	);
}

export default Hero;
