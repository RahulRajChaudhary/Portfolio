


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with cart, payments, and admin dashboard. Built with modern web technologies for optimal performance.",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    imageUrl: "/ecommerce.jpg",
    videoUrl: "/ecommerce-demo.mp4",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Interview Prepration AI",
    description:"AI-powered MERN app that generates role-based interview Q&A with Gemini API, featuring JWT auth, session management, pinned questions, and a modern Tailwind UI.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Gemini API", "Tailwind CSS"],
    imageUrl: "/preptrix.jpg",
    videoUrl: "/preptrix-demo.mp4",
    demoUrl: "https://preptrixfrontend.onrender.com/",
    githubUrl: "https://github.com/RahulRajChaudhary/Preptrix"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecasts with interactive maps, location-based alerts, and historical data visualization.",
    tags: ["TypeScript", "OpenWeather API", "Chart.js", "Geolocation"],
    imageUrl: "/weather.jpg",
    videoUrl: "/weather-demo.mp4",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fitness Tracker",
    description: "Comprehensive workout tracking app with progress visualization, exercise library, and social features.",
    tags: ["React Native", "GraphQL", "Node.js", "D3.js"],
    imageUrl: "/fitness.jpg",
    videoUrl: "/fitness-demo.mp4",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Fitness Tracker",
    description: "Comprehensive workout tracking app with progress visualization, exercise library, and social features.",
    tags: ["React Native", "GraphQL", "Node.js", "D3.js"],
    imageUrl: "/fitness.jpg",
    videoUrl: "/fitness-demo.mp4",
    demoUrl: "#",
    githubUrl: "#"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "ExpressJS",
  "PostgreSQL",
  "REST APIs",
  "Docker",
  "AWS",
  "Redis",
  "Framer Motion",
] as const;