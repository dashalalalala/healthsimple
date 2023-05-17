import { Link } from "react-router-dom";
import "./FooterMain.scss";
import linkedinLogo from "../../assets/icons/linkedin.svg";
import githubLogo from "../../assets/icons/github.svg";

function FooterMain() {
	return (
		<>
			<div className="footer">
				<p className="footer__body">made with 🩵 by Dashalalala</p>
				<div className="links">
					<Link to="https://github.com/dashalalalala">
						<img className="links__img" src={githubLogo} alt=""></img>
					</Link>
					<Link to="https://www.linkedin.com/in/dchernikova">
						<img className="links__img" src={linkedinLogo} alt=""></img>
					</Link>
				</div>
			</div>
		</>
	);
}

export default FooterMain;
