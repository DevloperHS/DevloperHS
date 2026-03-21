export const PORTFOLIO_DATA = {
  name: "Developer Harsh",
  handle: "devloper_hs",
  tagline: "AI Engineer · Technical Writer · IIT Madras",
  role: "AI Engineer + Technical Writer @ Composio",
  location: "San Francisco",
  startDate: "March 2025",
  education: {
    institution: "IIT Madras",
    degree: "B.S. Data Science & Applications",
    period: "2023–2027",
    courses: ["ML Techniques", "Deep Learning", "NLP", "DSA", "DBMS", "Modern Application Development"]
  },
  socials: [
    { name: "Twitter / X", url: "https://x.com/devloper_hs", handle: "@devloper_hs" },
    { name: "LinkedIn", url: "https://linkedin.com/in/devloperhs", handle: "in/devloperhs" },
    { name: "GitHub", url: "https://github.com/22f2000147", handle: "22f2000147" },
    { name: "YouTube", url: "https://youtube.com/@DevloperHarsh", handle: "Devloper Harsh" },
    { name: "Email", url: "mailto:devloper.hs2015@gmail.com", handle: "devloper.hs2015@gmail.com" }
  ],
  skills: {
    languages: ["Python", "JavaScript", "C", "Java"],
    ai_ml: ["PyTorch", "TensorFlow", "LangChain", "LangGraph", "CrewAI", "Hugging Face", "Unsloth", "Ollama"],
    web: ["FastAPI", "Django", "NextJS", "VueJS"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    tools: ["Docker"]
  },
  community: [
    { role: "YouTube Creator", org: "Devloper Harsh", period: "Oct 2023–present", desc: "6.6k subscribers" },
    { role: "Community Manager", org: "Hackweekly", period: "May 2022–present", desc: "" },
    { role: "Community Moderator", org: "StackUp & AngelHack", period: "May 2023–Dec 2024", desc: "" }
  ],
  projects: [
    {
      id: "deep-researcher-agent",
      slug: "deep-researcher-agent",
      title: "Deep Researcher Agent",
      shortDesc: "AI-powered research report generation using local LLM-based agents.",
      fullDesc: "An advanced, AI-powered research report generation tool. It acts as a local LLM-based agent capable of generating comprehensive markdown reports with intact sources, all processed entirely locally. Built to demonstrate the power of local models combined with sophisticated agentic workflows.",
      tech: ["Python", "LangGraph", "Local LLMs", "Multi-agent pipelines"],
      stars: 34,
      forks: 5,
      github: "https://github.com/22f2000147/deep-researcher"
    },
    {
      id: "vae-rl-game-generator",
      slug: "vae-rl-game-generator",
      title: "VAE and RL Driven Game Environment Generator",
      shortDesc: "Dynamic game frame generation using Variational Autoencoders and RL.",
      fullDesc: "A novel approach to interactive game environments. This project explores dynamic game frame generation using Variational Autoencoders (VAE) and Reinforcement Learning (RL), enabling user interaction to actively shape and generate the game environment in real-time. A complex AI application pushing the boundaries of simulation.",
      tech: ["PyTorch", "VAE", "Reinforcement Learning", "Python"],
      github: "https://github.com/22f2000147"
    },
    {
      id: "agentic-cli-tool",
      slug: "agentic-cli-tool",
      title: "Agentic CLI Tool",
      shortDesc: "Versatile CLI agent built with Composio SDK for natural language commands.",
      fullDesc: "A versatile command-line interface agent built leveraging the Composio SDK. This tool acts as a powerful local assistant, performing a wide variety of tasks directly from the terminal through natural language user commands. It showcases practical agentic AI capabilities in daily developer workflows.",
      tech: ["Composio SDK", "Python", "CLI", "LLMs"],
      github: "https://github.com/22f2000147"
    }
  ],
  posts: [
    {
      id: 1,
      slug: "mcp-servers-clients",
      title: "How to build MCP Servers and Clients from Scratch",
      date: "Mar 16, 2025",
      readingTime: "8 min",
      tags: ["ai", "beginners", "productivity", "chatgpt"],
      excerpt: "Think of MCP as a USB-C port for AI. Model Context Protocol provides a standard, secure, real-time interface for AI systems to connect with external tools, APIs, and data sources. Learn how to build your own MCP server from scratch using Python SDK and connect it to Cursor."
    },
    {
      id: 2,
      slug: "qwen3-vs-deepseek",
      title: "Qwen 3 vs. Deepseek R1: Complete Comparison",
      date: "May 4, 2025",
      readingTime: "14 min",
      tags: ["ai", "opensource", "deeplearning", "productivity"],
      excerpt: "Alibaba's Qwen 3 Series claims to outperform DeepSeek R1, Grok-3, and Gemini 2.5 Pro with fewer active parameters. I put both models through rigorous testing across coding, reasoning, math, and writing tasks to find out which one truly reigns supreme."
    },
    {
      id: 3,
      slug: "a2a-protocol-guide",
      title: "A Practical Guide to Agent-to-Agent (A2A) Protocol",
      date: "Apr 29, 2025",
      readingTime: "10 min",
      tags: ["ai", "opensource", "python", "agents"],
      excerpt: "Google's A2A Protocol enables different specialized AI agents to communicate directly, delegate tasks, and work as a team. Over 50 tech partners have already adopted it. Here's a deep dive into the theory and a practical build using Composio, Gemini, and Puppeteer MCP."
    },
    {
      id: 4,
      slug: "claude-vs-codex",
      title: "Claude Code vs. OpenAI Codex: Which is Best for Pair Programming?",
      date: "May 30, 2025",
      readingTime: "11 min",
      tags: ["ai", "opensource", "webdev", "programming"],
      excerpt: "AI-powered CLI agents are revolutionising how developers interact with their codebases. I tested both Claude Code and OpenAI Codex CLI head-to-head across architecture, memory management, security, and real-world coding tasks to find the winner."
    }
  ]
};
