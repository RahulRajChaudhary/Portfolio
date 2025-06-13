import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team management features.",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    imageUrl: "/taskapp.jpg",
    videoUrl: "/taskapp-demo.mp4",
    demoUrl: "#",
    githubUrl: "#"
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