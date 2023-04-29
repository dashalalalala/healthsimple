import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	organization: "org-us92a0cvsnjdayMQttgi5xcd",
	apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export class OpenAI {
	constructor() {
		this.openai = openai;
	}

	async createChatCompletion(message) {
		const completion = await this.openai.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: `${message}` }],
		});
		return completion.data.choices[0].text;
	}
}
