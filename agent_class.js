import {Ollama} from 'ollama'
import { readFileSync } from 'fs'

export class CoolAgent {

    constructor(name) {
        this.name = name;
        this.sys_prompt = readFileSync('./sys_pmt.txt', 'utf8').trim()
        this.messages = [];

        if (this.sys_prompt) {
            this.messages.push({ role: 'system', content: this.sys_prompt });
        }

        this.client = new Ollama({
            host: 'http://rigel.cs.byu.edu:11434'
        })
    }

    async send_message(message) {
        this.messages.push({ role: 'user', content: message });

        const response = await this.client.chat({
            model: 'qwen3:latest',
            messages: this.messages,
        });

        this.messages.push({ role: 'assistant', content: response.message.content });

        return response;
    }

    async agent_loop(){
        
    }
}