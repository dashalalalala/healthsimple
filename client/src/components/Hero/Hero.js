import "./Hero.scss";
import heroIcon from "../../assets/icons/undraw_workout.svg";
import { Highlight, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="wrapper">
			<div className="hero">
				<div className="hero__text">
					<Text
						className="hero__tagline"
						bgGradient="linear(to-l, #ADB6FF, #63B3ED)"
						bgClip="text"
						fontSize="6l"
						fontWeight="extrabold"
					>
						Become the best version of yourself.
					</Text>
					<h3 className="hero__body hero__body--mobile">
						<Highlight
							query={["essential"]}
							styles={{ px: "1", py: "1", bg: "blue.100" }}
						>
							Maintaining healthy habits is essential for overall well-being and
							longevity, but it can be challenging to develop new habits or give
							up bad ones.
						</Highlight>
					</h3>
					<h3 className="hero__body hero__body--mobile">
						<Highlight
							query={["personalized insights"]}
							styles={{ px: "1", py: "1", bg: "blue.100" }}
						>
							Healthsimple delivers personalized insights on the benefits of
							keeping up with each habit.
						</Highlight>
					</h3>
				</div>
				<div className="hero__image">
					<img className="hero__icon" src={heroIcon} alt=""></img>
				</div>
			</div>
			<div className="hero__divider">
				<h3 className="hero__body hero__body--tablet-desktop">
					<Highlight
						query={["essential"]}
						styles={{ px: "1", py: "1", bg: "blue.100" }}
					>
						Maintaining healthy habits is essential for overall well-being and
						longevity, but it can be challenging to develop new habits or give
						up bad ones.
					</Highlight>
				</h3>
				<h3 className="hero__body hero__body--tablet-desktop">
					<Highlight
						query={["personalized insights"]}
						styles={{ px: "1", py: "1", bg: "blue.100" }}
					>
						Healthsimple delivers personalized insights on the benefits of
						keeping up with each habit.
					</Highlight>
				</h3>
			</div>
			<Link to="/my-account/8d9b240f-7c4e-4f57-ba44-99af4b0dcedf/habits">
				<button className="hero__button">ACCEPT THE CHALLENGE</button>
			</Link>
		</div>
	);
}

export default Hero;
