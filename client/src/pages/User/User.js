import "./User.scss";
import Greeting from "../../components/Greeting/Greeting";
import Summary from "../../components/Summary/Summary";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../../utils";
import { useParams } from "react-router-dom";

function User() {
	const [userData, setUserData] = useState(null);
	const { userId } = useParams();

	useEffect(() => {
		axios
			.get(`${apiUrl}/my-account/${userId}/habits`)
			.then((response) => {
				setUserData(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [userId]);

	if (userData) {
		return (
			<div className="user">
				<Greeting userData={userData} />
				<Summary userData={userData} />
			</div>
		);
	}
}

export default User;
