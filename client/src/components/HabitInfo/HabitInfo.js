import "./HabitInfo.scss";
import { useEffect, useState } from "react";
import { apiUrl } from "../../utils";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Typist from "react-typist-component";

function HabitInfo() {
	const [habitData, setHabitData] = useState(null);
	const [completed, setCompleted] = useState(false);
	const [benefitsData, setBenefitsData] = useState(null);
	const [loading, setLoading] = useState(true); // loading state
	const { habitId } = useParams();
	const { userId } = useParams();

	const habitBenefits =
		benefitsData &&
		benefitsData[habitData.name] &&
		benefitsData[habitData.name][habitData.streak]
			? benefitsData[habitData.name][habitData.streak]
			: null;

	console.log("habit benefits", habitBenefits);

	useEffect(() => {
		Promise.all([
			axios.get(`${apiUrl}/my-account/${userId}/habits/${habitId}`),
			axios.get(`${apiUrl}/benefits`),
		])
			.then(([habitResponse, benefitsResponse]) => {
				setHabitData(habitResponse.data);
				setBenefitsData(benefitsResponse.data);
				setLoading(false); // Updating loading state when requests are done
			})
			.catch((error) => {
				console.error(error);
				setLoading(false);
			});
	}, [habitId]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (!habitData) {
			return;
		}

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); // Set the time to 00:00:00 for PUT Request to avoid duplicating tracked data generation

		try {
			const trackedDataResponse = await axios.put(
				`${apiUrl}/my-account/${userId}/habits/${habitId}/tracked-data`,
				{
					completed: completed,
					date: currentDate.getTime() / 1000, // Convert to Unix timestamp
				}
			);

			if (completed) {
				alert("Congratulations on completing your habit for today!");
			}

			// Fetch the habit data after updating the tracked data
			const habitResponse = await axios.get(
				`${apiUrl}/my-account/${userId}/habits/${habitId}`
			);

			setHabitData((oldHabitData) => ({
				...oldHabitData,
				tracked_data: [...oldHabitData.tracked_data, habitResponse.data],
				streak: completed
					? oldHabitData.streak + 1
					: Math.max(0, oldHabitData.streak - 1),
			}));

			const benefitsResponse = await axios.get(`${apiUrl}/benefits`);
			setBenefitsData(benefitsResponse.data);
			console.log(benefitsResponse.data);
		} catch (error) {
			console.error(error);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if ((habitData, benefitsData))
		return (
			<div className="habit">
				<Link to={`/my-account/${userId}/habits`}>
					<p className="back">🏃 Go Back</p>
				</Link>
				<h1 className="habit__title">{habitData.name}</h1>
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
						Here are the benefits of following this habit for {habitData.streak}{" "}
						days:
					</h2>
					<p className="habit__benefits--body">
						{habitBenefits && (
							<Typist key={habitBenefits}>{habitBenefits}</Typist>
						)}
					</p>
				</div>
			</div>
		);
}

export default HabitInfo;
