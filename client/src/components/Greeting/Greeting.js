import "./Greeting.scss";

function Greeting({ userData }) {
	return (
		<div className="greeting">
			<div className="greeting__header">
				<h1 className="greeting__header--title">
					Hello, {userData.user_name}! 👋
				</h1>
				<h2 className="greeting__header--motivational">
					Thank you for showing up today! It is very important to keep track of
					your goals - that is how we progress, right? Let's now jump into some
					actual work. Shall we?{" "}
				</h2>
			</div>
		</div>
	);
}

export default Greeting;
