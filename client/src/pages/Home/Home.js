import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import FooterMain from "../../components/Footer/FooterMain";

function Home() {
	return (
		<div className="home">
			<Hero />
			<FooterMain />
		</div>
	);
}

export default Home;
