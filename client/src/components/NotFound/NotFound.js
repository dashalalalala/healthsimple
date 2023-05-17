import "./NotFound.scss";
import image404 from "../../assets/icons/undraw_page_not_found.svg";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="not-found">
			<img className="not-found__image" src={image404} alt=""></img>
			<h1>Oops! You seem to be lost.</h1>
			<p>Here are some helpful links:</p>
			<Link to="/">
				<button className="not-found__button">Home</button>
			</Link>
		</div>
	);
}

export default NotFound;
