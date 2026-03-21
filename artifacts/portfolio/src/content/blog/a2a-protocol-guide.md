Google recently introduced the **Agent-to-Agent (A2A) Protocol**, and it's already making waves in the AI space. From travel planning to enterprise automation, real-world use cases are popping up fast.

Over **50 tech partners**—including MongoDB, Atlassian, SAP, PayPal, and Cohere—have already adopted it, highlighting just how impactful A2A is becoming.

As an AI enthusiast, I spent the weekend exploring A2A, and in this article, I'll break down what I've learned. I've split it into two parts:

- **Theory** – What A2A is, how it works, and why it matters.
- **Practical** – How to build with A2A and integrate **MCP** to connect tools and data sources seamlessly.

---

## What is A2A

![A2A Protocol Diagram](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5agcoox01pzsvvvv7bpf.png)

A2A stands for Agent-to-Agent protocol. It is designed to enable different, specialized AI agents to communicate directly with each other, delegate tasks, and work together as a team.

For example, it allows a main agent (like a personal assistant) to act as a project manager, coordinating a team of specialist agents.

This solves the problem of current AI agents working in isolation and opens up new ways to build complex multi-agentic systems.

It is built on 5 key principles:

1. **Simple**: Reusing existing standards (HTTP, JSON-RPC, SSE, Push Notify)
2. **Enterprise Ready**: Built-in Auth, Security, Privacy, Tracing, Monitoring Support
3. **Async First**: Can handle very long-running tasks while providing meaningful updates.
4. **Modality Agnostic**: Supports text, audio/video, forms, Iframe, etc.
5. **Opaque Execution**: Agents do not have to share thoughts, plans, or tools.

---

## Components of A2A Protocol

![Components Of A2A](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r9rg3evebs80bb5fkyum.png)

These are the core components of A2A:

- **Client-Server Model**: A2A works on client-server architecture, where the client (agent) asks for a task and the server (specialized agent/tool) executes it. Roles can change during the task flow.
- **Agent Cards**: JSON files that act as an agent's profile. Lists `id`, `name`, `job`, `type`, `security details`, `MCP support`, and more. Enables agent discovery by clients.
- **Task**: The main unit of work — moves through stages: submitted → working → input-required → completed/failed/cancelled.
- **Message Structure**: Inside a task, agents communicate using messages containing parts with actual content (multimodal).
- **Artifacts**: The output of a task, delivered as structured results to ensure consistency.

---

## How A2A Protocol Works

![A2A Workflow Diagram](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qzspnu0kuoz3gqld0tv0.png)

When a task is assigned to an agent, it goes through the following stages:

**Agent Discovery**
- Each specialist agent publishes an **Agent Card** (like a resume).
- The card includes capabilities (e.g., "travel_planning", "budget_analysis").
- A requesting agent uses these cards to discover the right specialists.

**Task Delegation**
- The requesting agent **assigns tasks** to selected specialists.
- Tasks are expressed in **natural language**, allowing flexibility.
- Example: "Find affordable flights and hotel options."

**Task Processing (Multi Turn)**
- Tasks go through a **lifecycle**: pending → running → intermediate updates → completed/failed.
- The requesting agent can receive acknowledgements, track progress, and monitor updates.

**Completion & Delivery**
- Once all tasks are done, the requesting agent collects and merges results (artifacts).
- The final output is a coherent, combined solution (e.g., a full vacation itinerary).

---

## A2A + MCP — A Great Match

MCP (Model Context Protocol) is a new standard protocol that allows agents to connect with custom tools, APIs, and data sources.

By adding an MCP layer, you can keep everything in sync and ensure smooth collaboration between agents:

- **Context Loss**: MCP shares key background info so all agents know what's going on.
- **Tool Mismatch**: MCP tells agents what tools are available and how to use them.
- **Misaligned Goals**: MCP helps agents understand the task's purpose so they work toward the same goal.
- **Data Confusion**: MCP standardizes how agents share and read data.
- **Handoffs**: MCP ensures the next agent picks up where the last one left off.

### Example: Trip Planning with A2A + MCP

![A2A & MCP Based Trip Planner Agent Workflow](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fwbpzo63otvpedyijz76.png)

User assigns a trip planning task. The master agent finds Agent Cards for specialized agents: Travel, Budget, and Local Guide.

- **Travel Agent** uses MCP to search flights and hotels
- **Budget Agent** uses an MCP-linked calculator tool
- **Local Guide** accesses an activities database via MCP

Finally, once all agents complete their work, the master agent combines everything and generates the final structured response.

In this setting, **A2A coordinates *who does what***, while **MCP ensures each agent can *actually do it*** using the right tools.

---

## Building With A2A Protocol using Composio, Gemini & Anthropic

### Problem Statement

For this demo, let's build a browser automation agent that leverages the `puppeteer` MCP server to browse the web and perform actions autonomously.

### Workspace Setup

```bash
python -m venv a2a
a2a\Scripts\activate
pip install google-adk
code .
```

Create a `.env` file:

```bash
GOOGLE_API_KEY=your-api-key
GEMINI_API_KEY=your-api-key
```

### Set Up MCP Server

1. Head to the MCP Server Repository and open the `puppeteer` MCP server page.
2. Scroll down to **Usage with VS Code** → click **One Click Install** → give required permissions.
3. Verify in `settings.json`.

### App Code

Create `automation_agent.py`:

```python
import asyncio
from dotenv import load_dotenv
from google.genai import types
from google.adk.agents.llm_agent import LlmAgent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset, StdioServerParameters

load_dotenv('.env')

async def get_tools_async():
    print("Connecting to Puppeteer MCP server...")
    tools, exit_stack = await MCPToolset.from_server(
        connection_params=StdioServerParameters(
            command='npx',
            args=["-y", "@modelcontextprotocol/server-puppeteer"],
        )
    )
    return tools, exit_stack

async def get_agent_async():
    tools, exit_stack = await get_tools_async()
    root_agent = LlmAgent(
        model='gemini-2.0-flash',
        name='web_search_assistant',
        instruction=(
            "You are a web automation assistant. Use browser tools to navigate pages, "
            "click, and extract data. Always try to solve user queries by using the tools."
        ),
        tools=tools
    )
    return root_agent, exit_stack

async def async_main():
    session_service = InMemorySessionService()
    session = session_service.create_session(
        state={}, app_name='mcp_web_search_app', user_id='web_search'
    )

    query = (
        "Go to https://news.google.com and extract the top 5 headlines from the homepage. "
        "Use your browser automation tools to navigate and extract the text."
    )
    content = types.Content(role='user', parts=[types.Part(text=query)])
    root_agent, exit_stack = await get_agent_async()

    runner = Runner(
        app_name='mcp_web_search_app',
        agent=root_agent,
        session_service=session_service,
    )

    async for event in runner.run_async(
        session_id=session.id, user_id=session.user_id, new_message=content
    ):
        print(f"Event received: {event}")

    await exit_stack.aclose()

if __name__ == '__main__':
    asyncio.run(async_main())
```

---

## Conclusion

A2A Protocol is the missing piece for building truly collaborative AI systems. When combined with MCP, it enables:

- **Structured multi-agent workflows** where specialized agents work in parallel
- **Standardized communication** between agents across different frameworks
- **Real-world automation** that goes beyond single-agent limitations

The combination of A2A + MCP + tools like Composio is a glimpse into the future of agentic AI — where agents don't just answer questions, they get things done.
