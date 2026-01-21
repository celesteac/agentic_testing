# Current Development notes-to-self

This project is NOT FINISHED btw

### Todo
-  troubleshoot the react thinking prompt
-  coded agent loop
    -  parse agent responses for automatic tool calling 
    -  persist memory for extended conversation

### Questions for self
-  how do I automatically construct the prompt with the tool definitions and list rather than writing it out manually

# About

This project is a practice-build of a simple math agent, coded using the ollama javascript library. 

### To use

While hosting your own ollama, replace the client url with you localhost url


### Tutorials I followed

https://learn.deeplearning.ai/courses/ai-agents-in-langgraph/lesson/c1l2c/build-an-agent-from-scratch

https://youtu.be/mYo7UFwnW1k?si=SE1Hv5Vt7ooIxh6S

### Other resources I used

https://learn.deeplearning.ai/courses/agentic-ai/lesson/pu5xbv/welcome!

https://www.kaggle.com/whitepaper-agents


# Agents

### Have 
-  An llm model
-  A system prompt with:
    -   a basic instruction
    -   thinking loop intructions (eg: ReACt)
    -   tool definitions
-  memory/context with previous messages and information
-  a coded thinking loop
-  tools

## The thinking loop

The thinking loop has two parts: the description to the agent in itse system prompt and the code loop itself.

### Agent Prompt

Describe to the agent in the prompt the thinking-loop process and output format you would like it to use. Give it instructions and an example.

When the agent takes an action, parse that action, call the tool, and call the agent again with the tool response appended as an observation.

The most basic/common thinking loop is ReAct: Reason, Action. The intermediate steps are Thought, Action, and Observation, ending with a final answer. 

Here are two examples of a ReAct prompt.

```
You run in a loop of Thought, Action, PAUSE, Observation.
At the end of the loop you output an Answer
Use Thought to describe your thoughts about the question you have been asked.
Use Action to run one of the actions available to you - then return PAUSE.
Observation will be the result of running those actions.

Your available actions are:

calculate:
e.g. calculate: 4 * 7 / 3
Runs a calculation and returns the number - uses Python so be sure to use floating point syntax if necessary

average_dog_weight:
e.g. average_dog_weight: Collie
returns average weight of a dog when given the breed

Example session:

Question: How much does a Bulldog weigh?
Thought: I should look the dogs weight using average_dog_weight
Action: average_dog_weight: Bulldog
PAUSE

You will be called again with this:

Observation: A Bulldog weights 51 lbs

You then output:

Answer: A bulldog weights 51 lbs
```

```
Question: {the input question}
Thought: {your step-by-step thinking}
Action: {one of: calculator, web_search}
Action Input: {the input for the action}
PAUSE 

You will receive:
Observation: {result of the action}

Continue with:
Thought: {your reasoning about the result}
Action: {next action if needed}
... {repeat as needed}

Final Answer: {your complete answer to the question}
```
### Code loop

parses llm responses for specific actions/tools to call

accepts further user input?

## Memory/Context

The simplest way is to give the llm a list of messages which starts with the system prompt and the user query and appends new each message to the list as the conversation continues.