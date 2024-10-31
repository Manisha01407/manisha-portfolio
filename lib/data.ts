import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuSchool, LuBriefcase } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import exploraStaysSS from "@/public/explora-stays-ss.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer Intern",
    location: "Hyderabad, India",
    description:
      "I had the opportunity to work on several projects focused on frontend web development, which allowed me to apply and expand my technical skills in a professional setting.",
    icon: React.createElement(LuBriefcase),
    date: "2023-2023",
  },
  {
    title: "Bachelor of Technology, VMEG",
    location: "Shamshabad, Hyderabad, India",
    description:
      "Graduated in Computer Science and Engineering from Vardhaman College of Engineering. I learned  Java, Data Structures, Algorithms, DBMS, SQL, OS, Computer Networks etc.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },

  {
    title: "High School",
    location: "Banjarahills, Hyderabad, India",
    description:
      "I completed my Schooling from Sree Saraswathi vidya mandhir high School with 8.7 CGPA and my senior secondary from Narayana Junior College with 82.60% marks where I studied Physics, Chemistry and Mathematics",
    icon: React.createElement(LuSchool),
    date: "2017-2019",
  },
] as const;

export const projectsData = [
  {
    title: "Blogging Web App",
    description:
      "The Medium.com Clone, with React and Cloudflare Workers, enables secure sign-in, content creation, and discovery of articles.",
    tags: ["ReactJS", "JWT", "Typescript", "PostgreSQL", "Serverless"],
    imageUrl: corpcommentImg,
    linkToProject: "https://medium-clone-five-dusky.vercel.app/",
  },
  {
    title: "ChatKaro.com",
    description:
      "A public web app for quick chat on text. It allows you to send messages in real time and also share images.",
    tags: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "React-Router-Dom",
      "Context API",
    ],
    imageUrl: wordanalyticsImg,
    linkToProject: "https://chat-app-react-firebase-rosy.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description:
      "A smooth and responsive personal portfolio website built using Next.js and Tailwind CSS. It also uses Framer Motion.",
    tags: [
      "NextJS",
      "Tailwind CSS",
      "Framer Motion",
      "Context API",
      "TypeScript",
    ],
    imageUrl: rmtdevImg,
    linkToProject: "https://portfolio-website-steel-two.vercel.app/",
  },
] as const;

export const skillsData = [
  "Java",
  "Operating Systems",
  "Computer Networks",
  "DBMS",
  "Next.js",
  "TypeScript",
  "React.js",
  "JavaScript",
  "CI/CD",
  "Docker",
  "TurboREPO",
  "Data Structures",
  "Algorithms",
  "Cloudflare Workers",
  "Hono.js",
  "MongoDB",
  "Recoil",
  "Zod",
  "JWT",
  "NextAuth.js ",
  "SQL",
  "HTML",
  "CSS",
  "Prisma",
  "PostgreSQL",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "noSQL",
  "Serverless Backends",
  "ExpressJS",
  "REST APIs",
  "Framer Motion",
  "AWS",
  "ORM libraries",
  "backend communication",
  "Websockets",
  "Radis",
] as const;