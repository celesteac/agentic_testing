import {Ollama} from 'ollama'
import { CoolAgent } from './agent_class.js';import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    const agent = new CoolAgent("Mathy Agent");
    const user_query = await new Promise(resolve => {
        rl.question("Enter a math problem for the agent to solve: ", resolve);
    });
    const response = await agent.send_message(user_query);
    console.log(response.message.content);
    rl.close();
}

main();
