const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
	organization: process.env.organizationKey,
	apiKey: process.env.openAiApiKey,
});

const openai = new OpenAIApi(configuration);

async function getBenefits(habit, streak) {
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: `What are the benefits of following ${habit} for ${streak} days?`,
		temperature: 0.7,
		max_tokens: 100,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
		stop: ["4"],
	});

	console.log(response);

	return response.data.choices[0].text.trim();
}

module.exports = {
	getBenefits,
};
