
export const PROFILE = {
  name: "Shashank S M",
  role: "AI / ML Engineer",
  location: "Bengaluru, India",
  email: "shashanksm532@gmail.com",
  phone: "+91 9353044342",
  linkedin: "https://linkedin.com/in/shashank-s-m",
  github: "https://github.com/SHASHANK-SM",
  resumeUrl: "#", // User: replace with your actual resume PDF link
  summary: "Enthusiastic AI/ML and Software Development student with practical experience in training CNN, RNN, and LSTM models and deploying full-stack applications using Python, Django, and modern tools. Skilled in solving technical challenges with clean and scalable solutions."
};

export const SIGNAL_PILLS = [
  "CNN / RNN / LSTM Specialist",
  "GenAI Architect",
  "Computer Vision & NLP",
  "Applied Research Focus",
  "Full-Stack AI Integration"
];

export const SKILLS = [
  {
    category: "Machine Learning & AI",
    items: ["CNN", "RNN", "LSTM", "NLP", "Deep Learning", "Supervised Learning", "Reinforcement Learning"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["TensorFlow", "Keras", "PyTorch", "Scikit-Learn", "NumPy", "Pandas", "HuggingFace"]
  },
  {
    category: "Programming",
    items: ["Python", "Java", "C", "SQL", "JavaScript"]
  },
  {
    category: "Production & Tools",
    items: ["Streamlit", "Flask", "Django", "Git", "GitHub", "Docker", "Jupyter"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"]
  }
];

export const PROJECTS = [
  {
    id: "wildlife-id",
    title: "Wildlife Species Identification",
    subtitle: "Computer Vision for Biodiversity Research",
    isFeatured: true,
    tags: ["PyTorch", "CNN", "Computer Vision", "Pandas"],
    problem: "Manual identification of wildlife species from camera traps is slow and hinders rapid conservation responses.",
    whyItMatters: "Biodiversity tracking is crucial for policy making. Automation reduces data processing time from weeks to minutes.",
    approach: "Utilized PyTorch and Torchvision to train a CNN on high-variance biological datasets. Implemented custom preprocessing pipelines for noise reduction.",
    outcome: "Achieved 87% test accuracy on multi-class identification, reducing classification lag significantly.",
    learnings: "Mastered data augmentation strategies for low-resource biological classes and fine-tuning deep architectures.",
    github: "https://github.com/SHASHANK-SM/Wildlife_Species_Identification"
  },
  {
    id: "story-gen",
    title: "AI-Based Story Generation",
    subtitle: "Context-Aware Text Synthesis",
    isFeatured: false,
    tags: ["RNN", "NLP", "Streamlit"],
    problem: "Generating long-form creative text often results in loss of thematic consistency.",
    whyItMatters: "Creative tools allow writers to overcome 'blank page' syndrome through intelligent prompting.",
    approach: "Developed an RNN-based sequence model focusing on character-level and word-level tokenization for better semantic flow.",
    outcome: "Created a web-based playground for real-time storytelling with high thematic coherence.",
    learnings: "Deep dive into backpropagation through time (BPTT) and gradient clipping for stable training.",
    github: "https://github.com/Shashank_SM"
  },
  {
    id: "meme-gen",
    title: "AI-Powered Meme Generation",
    subtitle: "Linguistic Humor with LSTMs",
    isFeatured: false,
    tags: ["LSTM", "NLP", "GenAI"],
    problem: "Humor is subjective and context-dependent, making automated generation complex.",
    whyItMatters: "Demonstrates AI capability in understanding cultural nuances and multimodal context.",
    approach: "Trained LSTMs on the Meme900k dataset to align visual context with linguistic output.",
    outcome: "Successful caption generation with 82% contextual relevance score.",
    learnings: "Explored latent space representations of visual-textual humor.",
    github: "https://github.com/SHASHANK-SM/AI-Powered-Meme-Generation"
  }
];

export const EXPERIENCE = [
  {
    title: "Advanced Machine Learning & AI",
    organization: "Samsung Innovation Campus",
    type: "Industry Training",
    period: "2023-2024",
    description: "In-depth training on industry-standard ML pipelines, focusing on model optimization and deployment for scalable intelligent systems."
  },
  {
    title: "NLP using Azure AI",
    organization: "Microsoft",
    type: "Certification",
    period: "2023",
    description: "Hands-on experience with Microsoft Azure's Cognitive Services for implementing large-scale language understanding models."
  },
  {
    title: "Java (OOPs Concepts)",
    organization: "IIT Kharagpur",
    type: "Academic Certificate",
    period: "2023",
    description: "Rigorous certification in object-oriented programming principles, emphasizing software design patterns and system architecture."
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Hackathon Contributor",
    event: "AI-Driven Game Env Generator",
    description: "Built a procedural world builder using GenAI principles for dynamic game environments."
  },
  {
    title: "Active Volunteer",
    event: "Institutional & NGO Support",
    description: "Managed logistics and technical outreach for various community-focused social fests."
  },
  {
    title: "AICTE SIP Completion",
    event: "Student Induction Program",
    description: "Recognized for professional ethics and technical agility during the induction phase."
  },
  {
    title: "High Academic Rank",
    event: "Cambridge Institute of Technology",
    description: "Consistent academic performance with a current CGPA of 8.61 in CSE (2022-2026)."
  }
];

export const VALUE_INSIGHTS = [
  {
    title: "Applied ML Priority",
    content: "I focus on models that survive production. Demos are great, but systems that solve biodiversity or creativity bottlenecks are where real value lies.",
    learning: "Currently exploring Model Pruning & Quantization."
  },
  {
    title: "Sequence Intelligence",
    content: "My expertise in RNNs/LSTMs stems from a fascination with time-series and sequential data. Making sense of history to predict the future.",
    learning: "Diving deeper into Transformer architectures."
  },
  {
    title: "Production Ready",
    content: "Bridging the gap between a Jupyter Notebook and a living application using Flask and Streamlit. Full-stack thinking for AI engineers.",
    learning: "Learning MLOps with Docker & Kubernetes."
  }
];
