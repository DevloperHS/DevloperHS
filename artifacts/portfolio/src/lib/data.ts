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
      title: "Benchmarking Local LLMs: The Unsloth Advantage",
      date: "Mar 15, 2025",
      excerpt: "Exploring the performance gains of fine-tuning local models with Unsloth compared to traditional methods. Why local AI is becoming increasingly viable for complex reasoning tasks."
    },
    {
      id: 2,
      title: "Building Multi-Agent Pipelines with LangGraph",
      date: "Feb 28, 2025",
      excerpt: "A deep dive into stateful, multi-actor LLM applications. How I structured the Deep Researcher Agent to decouple web scraping, synthesis, and writing into specialized nodes."
    },
    {
      id: 3,
      title: "From Notebooks to Production: Deploying AI",
      date: "Jan 12, 2025",
      excerpt: "Bridging the gap between data science and software engineering. Practical patterns for wrapping PyTorch models in FastAPI and containerizing with Docker."
    }
  ]
};
