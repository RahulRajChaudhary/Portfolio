


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



// export const projects = [
//    {
//     title: "RepoMind-AI GitHub Analyzer",
//     description:
//       "A SaaS platform that analyzes GitHub repositories using AI to help developers understand large codebases faster. Supports analysis of 100+ files per repo with low-latency responses and scalable architecture.",
//     tags: [
//       "Next.js",
//       "React",
//       "Node.js",
//       "MongoDB",
//       "Prisma",
//       "Gemini AI",
//       "Stripe",
//       "Tailwind CSS",
//     ],
//     imageUrl: "/repomind.jpg",
//     videoUrl: "/repomind-demo.mp4",
//     demoUrl: "https://repo-mind.vercel.app",
//     githubUrl: "https://github.com/RahulRajChaudhary/RepoMind",
//   },
//   {
//     title: "ZestyGo–Food Delivery Platform",
//     description:
//       "A full-stack food delivery system with real-time order tracking and role-based dashboards for customers, restaurants, and delivery agents. Designed to handle concurrent users and live order updates.",
//     tags: [
//       "MERN",
//       "Socket.IO",
//       "Firebase Auth",
//       "Razorpay",
//       "MongoDB",
//       "Tailwind CSS",
//     ],
//     imageUrl: "/zestygo.jpg",
//     videoUrl: "/zestygo-demo.mp4",
//     demoUrl: "https://zestygo-rsl1.onrender.com",
//     githubUrl: "https://github.com/RahulRajChaudhary/ZestyGo",
//   },
//   {
//     title: "ConvoX–Chat Application",
//     description:
//       "A real-time chat application built with a microservices architecture, supporting event-driven messaging, OTP-based authentication, and scalable real-time communication.",
//     tags: [
//       "MERN",
//       "Socket.IO",
//       "RabbitMQ",
//       "Redis",
//       "AWS EC2",
//     ],
//     imageUrl: "/convox.jpg",
//     videoUrl: "/convox-demo.mp4",
//     demoUrl: "http://3.26.225.244:3000/login",
//     githubUrl: "https://github.com/RahulRajChaudhary/convoX-backend",
//   },
//   {
//     title: "Interview Prepration AI",
//     description:"AI-powered MERN app that generates role-based interview Q&A with Gemini API, featuring JWT auth, session management, pinned questions, and a modern Tailwind UI.",
//     tags: ["MongoDB", "Express.js", "React", "Node.js", "Gemini API", "Tailwind CSS"],
//     imageUrl: "/preptrix.jpg",
//     videoUrl: "/preptrix-demo.mp4",
//     demoUrl: "https://preptrixfrontend.onrender.com/",
//     githubUrl: "https://github.com/RahulRajChaudhary/Preptrix"
//   },
  
  
 
// ] as const;

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  techStack?: {
    frontend?: readonly string[];
    backend?: readonly string[];
    database?: readonly string[];
    services?: readonly string[];
    deployment?: readonly string[];
  };
};

export const projects = [
  {
    title: "RepoMind-AI GitHub Analyzer",
    description:
      "A SaaS platform that analyzes GitHub repositories using AI to help developers understand large codebases faster. Supports analysis of 100+ files per repo with low-latency responses and scalable architecture.",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Gemini AI",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
      "Redis",
      "Vercel"
    ] as const,
    imageUrl: "/repomind.jpg",
    videoUrl: "/repomind-demo.mp4",
    demoUrl: "https://repo-mind.vercel.app",
    githubUrl: "https://github.com/RahulRajChaudhary/RepoMind",
    techStack: {
      frontend: ["Next.js 14", "React", "Tailwind CSS", "TypeScript"],
      backend: ["Node.js", "Express", "Gemini AI API"],
      database: ["MongoDB", "Redis", "Prisma"],
      services: ["Stripe", "GitHub API", "JWT Auth"],
      deployment: ["Vercel", "AWS", "Docker"]
    }
  },
  {
    title: "ZestyGo–Food Delivery Platform",
    description:
      "A full-stack food delivery system with real-time order tracking and role-based dashboards for customers, restaurants, and delivery agents. Designed to handle concurrent users and live order updates.",
    tags: [
      "MERN",
      "Socket.IO",
      "Firebase Auth",
      "Razorpay",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "JWT"
    ] as const,
    imageUrl: "/zestygo.jpg",
    videoUrl: "/zestygo-demo.mp4",
    demoUrl: "https://zestygo-rsl1.onrender.com",
    githubUrl: "https://github.com/RahulRajChaudhary/ZestyGo",
    techStack: {
      frontend: ["React", "Tailwind CSS", "Redux", "Context API"],
      backend: ["Node.js", "Express", "Socket.IO", "JWT"],
      database: ["MongoDB", "Mongoose"],
      services: ["Firebase Auth", "Razorpay", "Google Maps API"],
      deployment: ["Render", "AWS S3"]
    }
  },
  {
    title: "ConvoX–Chat Application",
    description:
      "A real-time chat application built with a microservices architecture, supporting event-driven messaging, OTP-based authentication, and scalable real-time communication.",
    tags: [
      "MERN",
      "Socket.IO",
      "RabbitMQ",
      "Redis",
      "AWS EC2",
      "Microservices",
      "JWT",
      "Docker"
    ] as const,
    imageUrl: "/convox.jpg",
    videoUrl: "/convox-demo.mp4",
    demoUrl: "http://3.26.225.244:3000/login",
    githubUrl: "https://github.com/RahulRajChaudhary/convoX-backend",
    techStack: {
      frontend: ["React", "Socket.IO Client", "Tailwind CSS"],
      backend: ["Node.js", "Express", "RabbitMQ", "Microservices"],
      database: ["MongoDB", "Redis"],
      services: ["Socket.IO", "JWT Auth", "OTP Service"],
      deployment: ["AWS EC2", "Docker", "Nginx"]
    }
  },
  {
    title: "Interview Preparation AI",
    description:
      "AI-powered MERN app that generates role-based interview Q&A with Gemini API, featuring JWT auth, session management, pinned questions, and a modern Tailwind UI.",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Gemini API",
      "Tailwind CSS",
      "JWT",
      "Context API"
    ] as const,
    imageUrl: "/preptrix.jpg",
    videoUrl: "/preptrix-demo.mp4",
    demoUrl: "https://preptrixfrontend.onrender.com/",
    githubUrl: "https://github.com/RahulRajChaudhary/Preptrix",
    techStack: {
      frontend: ["React", "Tailwind CSS", "Context API"],
      backend: ["Node.js", "Express", "Gemini API"],
      database: ["MongoDB", "Mongoose"],
      services: ["JWT Auth", "Session Management"],
      deployment: ["Render", "Netlify"]
    }
  },
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