import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { OpenAI } from "./openai.js";

const openai = new OpenAI();

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
	const { message } = req.body;

	const completion = await openai.createChatCompletion(message);

	res.json({
		completion,
	});
});

app.listen(port, () => {
	console.log(`App is listening on PORT ${port}`);
});