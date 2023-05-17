import "./Summary.scss";
import fillerImage from "../../assets/icons/undraw_appreciation.svg";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";

function Summary({ userData }) {
	const { userId } = useParams();

	if (userData)
		return (
			<div>
				<div className="summary-wrapper">
					<div className="summary">
						<h1 className="summary__today">TODAY IS</h1>
						<h2 className="summary__date">
							<Moment format="DD">{Date.now()}</Moment>
						</h2>
						<h2 className="summary__day">
							<Moment format="dddd">{Date.now()}</Moment>
						</h2>
					</div>
					<div className="habits">
						<h3 className="habits__title">Your Habits</h3>
						<div className="habits__list">
							{userData.user_habits &&
								userData.user_habits.map((habit) => (
									<p
										className="habits__item"
										key={habit.habit_id}
										id={habit.habit_id}
									>
										<Link to={`/my-account/${userId}/habits/${habit.habit_id}`}>
											{habit.habit_name}
										</Link>
									</p>
								))}
						</div>
					</div>
				</div>
				<div className="space-filler">
					<img className="space-filler__image" src={fillerImage}></img>
				</div>
			</div>
		);
}

export default Summary;
