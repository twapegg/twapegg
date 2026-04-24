export const projects = [
  {
    title: "Bant.ai",
    description:
      "Award-winning digital safety application from Can You HackIT 2025 that uses screenshots, OCR, and LLM-driven moderation to detect and flag harmful content in near real time.",
    skills: ["Next.js", "Electron", "Firebase", "Flask", "OpenAI API", "OCR"],
    imageUrl: "/bantai.png",
    imageAlt: "Bant.ai Project",
    link: "https://hackathon-bantai.vercel.app/",
    year: 2025,
  },
  {
    title: "AlzAware",
    description:
      "Machine learning application for early Alzheimer's detection using CNN models. Built with PyTorch for accurate image analysis and Next.js for a user-friendly interface, helping healthcare professionals with diagnostic support.",
    skills: ["Next.js", "Firebase", "Python Flask", "CNN Model (Pytorch)"],
    imageUrl: "/alzaware.png",
    imageAlt: "AlzAware Project",
    link: "https://alzaware.vercel.app/",
    year: 2024,
  },
  {
    title: "Aphrodite",
    description:
      "Modern web application showcasing elegant UI/UX design principles. Features responsive design, smooth animations, and efficient data management with MongoDB backend integration.",
    skills: ["Next.js", "MongoDB"],
    imageUrl: "/aphrodite.png",
    imageAlt: "Aphrodite Project",
    link: "https://aphrodite-orpin.vercel.app/",
    year: 2024,
  },

  {
    title: "Elysian",
    description:
      "Full-stack web application built with React and Express.js, featuring comprehensive user management, real-time data processing, and seamless MongoDB integration for optimal performance.",
    skills: ["React", "MongoDB", "ExpressJS"],
    imageUrl: "/elysian.png",
    imageAlt: "Elysian Project",
    link: "https://elysian-theta.vercel.app/",
    year: 2023,
  },
];

export const awards = [
  {
    title: "Champion",
    event: "Can You HackIT 2025 Regional Hackathon by IBPAP",
    date: "June 2025",
    icon: "trophy",
    iconColor: "text-gold",
  },
  {
    title: "Recognition by Industry Leaders",
    event: "International IT-BPM Summit 2025 by IBPAP",
    date: "September 2025",
    icon: "award",
    iconColor: "text-gold",
  },
  {
    title: "1st Runner-Up",
    event: "AI.deas for Impact by DICT",
    date: "June 2024",
    icon: "medal",
    iconColor: "text-gray-400",
  },
];

export const experiences = [
  {
    role: "AI Automation Engineer (Project-Based)",
    company: "Mun. of Sta. Rosa",
    location: "Remote",
    period: "Nov 2025 - Present",
    highlights: [
      "Architected LLM-driven automation pipelines with n8n, OpenAI, and vector embeddings that improved throughput by 60% and reduced latency from 2 minutes to 2 seconds.",
      "Reduced token usage, inference latency, and operational cost by redesigning workflows around embedding-based reuse while maintaining high classification accuracy.",
    ],
  },
  {
    role: "AI Developer Intern & Part-Time Developer",
    company: "Pro5.ai",
    location: "Remote",
    period: "Jun 2025 - Sep 2025",
    highlights: [
      "Integrated local LLMs in an interview proctoring pipeline, achieving 40% cost reduction while preserving 95% accuracy in suspicious behavior detection.",
      "Built a real-time gaze and head-movement tracking module (30+ FPS, <100ms latency) to automatically flag suspicious interview behavior.",
    ],
  },
  {
    role: "Full-Stack Developer (Voluntary)",
    company: "Miss Silliman",
    location: "Dumaguete City, Philippines",
    period: "Aug 2024",
    highlights: [
      "Developed a secure mobile judging system and backend capable of handling 300+ requests/sec during live events, ensuring zero data loss under peak traffic.",
      "Designed a fault-tolerant API and scoring workflow to support real-time submissions from multiple judges, maintaining consistency and reliability during live pageants.",
    ],
  },
];

export const techStack = [
  {
    category: "Web & Backend",
    technologies: [
      { name: "Next.js (React)", icon: "SiNextdotjs", specialty: true },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind", icon: "SiTailwindcss" },
      { name: "Node.js (Express)", icon: "SiNodedotjs" },
      { name: "FastAPI/Flask", icon: "SiFastapi" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "Supabase", icon: "SiSupabase" },
    ],
  },
  {
    category: "AI & Automation",
    technologies: [
      { name: "Python", icon: "FaPython", specialty: true },
      { name: "OpenAI", icon: "SiOpenai" },
      { name: "LangChain", icon: "SiLangchain" },
      { name: "n8n", icon: "SiN8N" },
      { name: "RAG", icon: "SiOpenai" },
      { name: "PyTorch", icon: "SiPytorch" },
    ],
  },
  {
    category: "Cloud & Tools",
    technologies: [
      { name: "AWS (EC2/S3/Lambda/API Gateway)", icon: "SiAmazonwebservices" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Git", icon: "SiGit" },
      { name: "Google Apps Script", icon: "SiGoogleappsscript" },
      { name: "WordPress", icon: "SiWordpress" },
      { name: "C/C++, Java, PHP", icon: "SiCplusplus" },
    ],
  },
];

export const contacts = [
  {
    name: "Email",
    url: "mailto:johntaltonaga@gmail.com",
    icon: "IoMail",
    external: false,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/stanleyaltonaga",
    icon: "FaLinkedin",
    external: true,
  },
  {
    name: "GitHub",
    url: "https://www.github.com/twapegg",
    icon: "FaGithub",
    external: true,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ppugppugi/",
    icon: "FaInstagram",
    external: true,
  },
];
