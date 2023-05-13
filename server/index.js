const express = require("express");
const cors = require("cors");
const fs = require("fs");
const uniqid = require("uniqid");
const jsonRouter = require("./routes/jsonRouter");

const app = express();
const port = 4000;

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

app.use("/", jsonRouter);

app.listen(port, () => {
	console.log(`App is listening on PORT ${port}`);
});