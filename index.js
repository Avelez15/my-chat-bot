import {Configuration, OpenAIApi} from 'openai'
import dotenv from 'dotenv'
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API-KEY
})

const openai = new OpenAIApi(configuration)

async function main() {
    const chatCompletion = await openai.createChatCompletion();
}

main();