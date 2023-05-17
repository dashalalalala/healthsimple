const express = require("express");
const cors = require("cors");
const fs = require("fs");
const habitsRouter = require("./routes/habitsRouter");
const usersRouter = require("./routes/usersRouter");
const benefitsController = require("./routes/benefitsRouter");

const app = express();
const port = 4000;

require("dotenv").config();

app.use(cors());
app.use(express.json());

// This middleware checks if we're getting JSON headers on our POST requests
app.use((req, res, next) => {
	if (
		req.method === "POST" &&
		req.headers["content-type"] !== "application/json"
	) {
		return res.status(400).send("Hey, you need to give me proper JSON");
	}

	next();
});

app.use("/", usersRouter);
app.use("/", habitsRouter);
app.use("/", benefitsController);

app.listen(port, () => {
	console.log(`App is listening on PORT ${port}`);
});
