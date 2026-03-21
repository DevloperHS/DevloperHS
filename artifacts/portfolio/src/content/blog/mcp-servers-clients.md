## What is MCP

Think of MCP as a USB C port on a laptop. With it, you can charge your laptop, perform data transfer, connect to other displays, and charge other Type C-supported devices as well.

Similarly, Model Context Protocol (MCP) provides a standard, secure, real time, and two-way communicating interface to AI systems for connecting with external tools, API Services and data sources.

What it means is, unlike traditional APIs integration which requires separate code, documentation, authentication methods, and maintenance, MCP can provide a single, standardized way for AI models to interact with external systems, i.e. you write code once and all AI systems can use it.

The key differences between MCP and traditional APIs include:

| **Feature** | **MCP** | **Traditional API** |
| --- | --- | --- |
| Integration Effort | Single, standardized integration | Separate integration per API |
| Real-Time Communication | ✅ Yes | ❌ No |
| Dynamic Discovery | ✅ Yes | ❌ No |
| Scalability | Easy (plug-and-play) | Requires additional integrations |
| Security & Control | Consistent across tools | Varies by API |

MCP enables two-way communication, allowing AI models to both retrieve information and trigger actions dynamically. This makes it perfect for creating more intelligent and context-aware applications.

So how this all works?

## MCP Components

![MCP Workings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/geelw6tw8umsllcatqka.png)

The MCP architecture consists of several key components that work together to enable seamless integration:

1. **MCP Hosts**: These are applications (like Claude Desktop or AI-driven IDEs) that need access to external data or tools
2. **MCP Clients**: They maintain dedicated, one-to-one connections with MCP servers.
3. **MCP Servers**: Lightweight servers that expose specific functionalities via MCP, connecting to local or remote data sources.
4. **Local Data Sources**: Files, databases, or services securely accessed by MCP servers
5. **Remote Services**: External internet-based APIs or services accessed by MCP servers

This separation of concerns makes MCP servers highly modular and maintainable.

### How The Components Work Together

Let's understand this with a practical example:

Say you're using Cursor (an MCP host) to manage your project's budget. You want to update a budget report in Google Sheets and send a summary of the changes to your team via Slack.

- Cursor (MCP host) initiates a request to its MCP client to update the budget report in Google Sheets and send a Slack notification.
- The MCP client connects to two MCP servers: one for Google Sheets and one for Slack.
- The Google Sheets MCP server interacts with the Google Sheets API (remote service) to update the budget report.
- The Slack MCP server interacts with the Slack API (remote service) to send a notification.
- MCP servers send responses back to the MCP client.
- The MCP client forwards these responses to Cursor, which displays the result to the user.

This process happens seamlessly, allowing Cursor to integrate with multiple services through a standardized interface.

## How to Build a MCP Server

There are 2 ways to build a MCP Server, using Python SDK or JavaScript SDK. For the sake of simplicity, I will stick to Python SDK.

### 1. Work Environment Setup

We start by creating a project directory. Navigate to your working folder and create a folder named **mcp**:

```powershell
mkdir mcp
cd mcp
```

Next create a virtual environment:

```powershell
# windows
python -m venv dotenv

# linux/mac
python3 -m venv dev-env
```

Activate the environment:

```powershell
# windows
dotenv\Scripts\activate

# linux/mac
source dev-env/bin/activate
```

Install 2 libraries — MCP SDK and MCP CLI:

```powershell
pip install mcp mcp[cli]
```

### 2. Writing the Server Code

Create a new file called **calculator.py** and write the following code:

```python
from mcp.server.fastmcp import FastMCP
import math

# instantiate an MCP server client
mcp = FastMCP("Hello World")

# DEFINE TOOLS

@mcp.tool()
def add(a: int, b: int) -> int:
    """Add two numbers"""
    return int(a + b)

@mcp.tool()
def subtract(a: int, b: int) -> int:
    """Subtract two numbers"""
    return int(a - b)

@mcp.tool()
def multiply(a: int, b: int) -> int:
    """Multiply two numbers"""
    return int(a * b)

@mcp.tool()
def divide(a: int, b: int) -> float:
    """Divide two numbers"""
    return float(a / b)

@mcp.tool()
def power(a: int, b: int) -> int:
    """Power of two numbers"""
    return int(a ** b)

@mcp.tool()
def sqrt(a: int) -> float:
    """Square root of a number"""
    return float(a ** 0.5)

@mcp.tool()
def factorial(a: int) -> int:
    """factorial of a number"""
    return int(math.factorial(a))

@mcp.tool()
def log(a: int) -> float:
    """log of a number"""
    return float(math.log(a))

# DEFINE RESOURCES
@mcp.resource("greeting://{name}")
def get_greeting(name: str) -> str:
    """Get a personalized greeting"""
    return f"Hello, {name}!"

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

Here's what the code does:

1. **Imported** `FastMCP` from the MCP package and the `math` module. The **FastMCP Server** manages connections, follows the MCP protocol, and routes messages.
2. **Created** an MCP server client named "Hello World".
3. **Added tools** using `@mcp.tool()` and **resources** using `@mcp.resource()`.
4. **Started** the mcp-server using `mcp.run()` via standard input/output (`stdio`).

### 3. Running & Testing the Server Locally

MCP Inspector is a handy GUI tool that lets you test your custom MCP server without integrating it with an LLM. Follow these steps:

- Open the terminal and ensure you are in the working environment.
- Run `mcp dev calculator.py`.
- If prompted, install CLI by pressing 'y', then rerun the command.
- Open the displayed URL (mostly localhost) and press "Connect" in MCP Inspector.
- Click "List Templates", select one, add your name, and click "Read Resources".
- Click "Tools" in the navbar → "List Tools" → choose a tool → input values → "Run Tool".

## Connecting Custom Servers to Cursor

Follow these steps for integration with Cursor:

- Open your working directory in Cursor.
- Go to `File → Preferences → Cursor Settings → MCP → Add New Server`.
- Fill in the server details:
  - **Name**: Choose a name (e.g., "calculator")
  - **Type**: Set as `command`
  - **Command**: Provide the full path to run the server:
    ```sh
    /path/to/your/venv/bin/python /path/to/your/file.py
    ```
- Check for a 🟢 indicator. If 🟠, verify and correct the file paths.
- Open the composer, select "Agent", and type: `Can you add two numbers 3, 6`

## Composio in a Nutshell

Composio is the ultimate integration platform, empowering developers to seamlessly connect AI agents with external tools, servers, and APIs with just a single line of code.

With the fully managed MCP Servers, developers can rapidly build powerful AI applications without the hassle of managing complex integrations.

## Composio MCP Integration

Integrating with Composio MCP is incredibly simple and can be done in just five steps:

1. Visit the Composio MCP Directory page
2. Select the tools you need
3. Go to the Installation Steps section and hit Generate. Copy the generated URL.
4. Open Cursor → `File → Preferences → Cursor Settings → MCP → Add New Server`
5. Select Type as "sse" & paste the copied URL into the Server URL.

## Linear Ticket Management with Slack Collaboration

Composio can handle advanced use cases effortlessly. Here's a practical example:

> Development teams often struggle to manage product-related issues, requiring constant back-and-forth between the IDE and Slack channels. A Composio-powered agent handles all operations through the IDE — keeping teams in sync without unnecessary context switching.

1. Head to the MCP Repository and select Linear & Slack integrations.
2. Generate an SSE Key & copy it.
3. Open Cursor and integrate with the SSE method.
4. Head to the Cursor chat, select Agent, and initiate an OAuth connection: _"create a connection with Slack"_.
5. Do the same for Linear, authenticate, and verify the connection.

![Slack-Composio Integration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/31hchuf0bcrloc9lyax8.png)

## Conclusion

As AI transforms software development, MCP will play an increasingly important role in creating seamless, integrated experiences.

Whether you're building custom MCP servers or leveraging pre-built solutions like Composio MCP, the protocol offers a powerful way to enhance AI capabilities through external tools and data sources.

The future of AI isn't just about smarter models — it's about creating ecosystems where AI can seamlessly interact with the tools we use every day. MCP is a crucial step toward that future.

Happy building! 🚀
