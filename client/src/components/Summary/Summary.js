import "./Summary.scss";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";

function Summary({ userData }) {
	const { userId } = useParams();
	const { habitId } = useParams();
	console.log(userData);
	console.log(habitId);

	if (userData)
		return (
			<div className="summary">
				<h1 className="summary__today">TODAY IS</h1>
				<h2 className="summary__date">
					<Moment format="DD">{Date.now()}</Moment>
				</h2>
				<h2 className="summary__day">
					<Moment format="dddd">{Date.now()}</Moment>
				</h2>
				<div className="habits">
					<h3 className="habits__title">Your Habits</h3>
					<div className="habits__list">
						{userData.habits &&
							userData.habits.map((habit) => (
								<p className="habits__item" key={habit.id} id={habit.id}>
									<Link to={`/my-account/${userId}/habits/${habit.id}`}>
										{habit.name}
									</Link>
								</p>
							))}
					</div>
				</div>
			</div>
		);
}

export default Summary;
