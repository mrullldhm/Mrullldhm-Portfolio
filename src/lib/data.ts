import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import project1 from "@/assets/work-1.png";
import project2 from "@/assets/work-2.png";
import project3 from "@/assets/work-3.png";
import project4 from "@/assets/work-4.png";

export const links = [
  {
    name: "HOME",
    hash: "#home",
  },
  {
    name: "ABOUT",
    hash: "#about",
  },
  {
    name: "PROJECT",
    hash: "#project",
  },
  {
    name: "SKILL",
    hash: "#skill",
  },
  {
    name: "EXPERIENCE",
    hash: "#experience",
  },
  {
    name: "CONTACT",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Assistant Manager",
    location: "18 Tai Seng, Singapore",
    description:
      "Assisted in daily operations of the F&B outlet, managed staff schedules, ensured high service standards, and supported inventory and cost control to enhance customer satisfaction and efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Management Trainee",
    location: "Queenstown, Singapore",
    description:
      "Underwent structured training in operations, staff supervision, and quality control to prepare for leadership roles in the cleaning service industry. ",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Moresume - AI Powered Resume Builder",
    description:
      "Built a full-stack resume builder with AI summary generation, drag-and-drop forms, secure authentication, and PDF export. Integrated OpenAI, Stripe, and Clerk for a seamless user experience.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Clerk",
    ],
    imageUrl: project1,
  },
  {
    title: "Image Search App – Powered by Pexels",
    description:
      "Created a responsive image search app using the Pexels API with JavaScript. Features include search, pagination, and modal image previews with full mobile support.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: project2,
  },
  {
    title: "Financial Knowledge Quiz Game",
    description:
      "Developed an interactive quiz game to test financial literacy. Includes dynamic questions, real-time scoring, and a mobile-friendly design.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: project3,
  },

  {
    title: "Calculator Application",
    description:
      "Built a fully functional calculator with support for basic and advanced operations. Includes keyboard support and responsive layout for various devices",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: project4,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "R",
  "React",
  "Next.js",
  "Vite",
  "Node.js",
  "Express.js",
  "SQL",
  "Bash",
  "Git",
  "GitHub",
  "Tailwind",
  "Bootstrap",
  "Shadcn",
  "Prisma",
  "PostgreSQL",
  "Postman",
  "Insomnia",
  "Tableplus",
  "Stripe",
  "Clerk",
  "DigitalOceabn",
  "Vercel",
  "Cloudflare",
  "Render",
  "Figma",
  "Ubuntu",
  "Framer Motion",
] as const;
