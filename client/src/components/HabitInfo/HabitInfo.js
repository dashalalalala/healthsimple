import "./HabitInfo.scss";
import { useEffect, useState } from "react";
import { apiUrl } from "../../utils";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Typist from "react-typist-component";
import fillerImage from "../../assets/icons/undraw_playful_cat.svg";

function HabitInfo() {
	const [habitData, setHabitData] = useState(null);
	const [completed, setCompleted] = useState(false);
	const [loading, setLoading] = useState(true);
	const { habitId } = useParams();
	const { userId } = useParams();

	useEffect(() => {
		axios
			.get(`${apiUrl}/my-account/${userId}/habits/${habitId}`)
			.then((response) => {
				setHabitData(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching habit data:", error);
				setLoading(false);
			});
	}, [habitId, userId]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (!habitData) {
			return;
		}

		const currentDate = new Date().toISOString().split("T")[0];

		try {
			await axios.put(`${apiUrl}/my-account/${userId}/habits/${habitId}`, {
				completed: completed,
				date: currentDate,
			});

			if (completed) {
				alert("Congratulations on completing your habit for today!");
			} else {
				alert("Don't worry, keep trying! You can do it!");
			}

			// Fetch the habit data after updating the tracked data
			const habitResponse = await axios.get(
				`${apiUrl}/my-account/${userId}/habits/${habitId}`
			);

			// Update the habit data state
			setHabitData(habitResponse.data);
		} catch (error) {
			console.error(error);
		}
	};

	if (loading) return <div>Loading</div>;

	if (habitData)
		return (
			<div>
				<div className="habit">
					<Link to={`/my-account/${userId}/habits`}>
						<p className="back">🏃 Go Back</p>
					</Link>
					<h1 className="habit__title">{habitData.habit_name}</h1>
					<form className="form" onSubmit={handleFormSubmit}>
						<p className="form__question">
							Have you completed your habit today? 🫶
						</p>
						<input
							type="radio"
							id="yes"
							name="completed"
							value="Yes"
							onChange={() => setCompleted(true)}
						/>
						<label className="form__input" htmlFor="yes">
							Yes 🥳
						</label>
						<br />
						<input
							type="radio"
							id="no"
							name="completed"
							value="No"
							onChange={() => setCompleted(false)}
						/>
						<label className="form__input" htmlFor="no">
							No 😔
						</label>
						<br />
						<input className="form__submit" type="submit" value="Submit" />
					</form>
					<div className="habit__benefits">
						<h2 className="habit__benefits--title">
							Here are the benefits of following this habit for{" "}
							{habitData.streak} days:
						</h2>
						<p className="habit__benefits--body">
							{habitData.benefits && (
								<Typist key={habitData.benefits[0].description}>
									{habitData.benefits[0].description}
								</Typist>
							)}
						</p>
					</div>
				</div>
				<div className="space-filler">
					<img className="space-filler__image" src={fillerImage} alt=""></img>
				</div>
			</div>
		);
}

export default HabitInfo;
