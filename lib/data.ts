import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import foodie from "@/public/foodie.png";

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
    title: "B. Tech",
    location: "BBSR, Odisha",
    description:
      "Completed my degree in Computer Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 Aug - 2023 Jun",
  },
  {
    title: "Software Developer Trainee",
    location: "BBSR, Odisha",
    description:
      "I worked on several projects using a tech stack that includes React.js, Next.js, Tailwind CSS, Node.js, and GraphQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Jul - 2024 Jan",
  },
  {
    title: "Full-Stack Developer",
    location: "BBSR, Odisha",
    description:
      "I'm now working as a full-stack developer. My stack includes React, Next.js, TypeScript, Node.js, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 Jan - present",
  },
] as const;

export const projectsData = [
  {
    title: "Easy-GPT",
    description:
      "An AI chatbot that assists users by summarizing text, generating content, providing coding solutions, and creating sci-fi images.",
    tags: ["Javascript", "React.js", "Css"],
    imageUrl: corpcommentImg,
  },
  {
    title: "QuizApp",
    description:
      "An Quiz app that helps users improve knowledge by providing daily quizzes with date-wise tracking and scoring.",
    tags: ["Java", "Kotlin", "Android", "Xml", ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Foodie",
    description:
      "A food ordering app that filters dishes based on price and categories.",
    tags: ["Javascript", "React", "Tailwind"],
    imageUrl: foodie,
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
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;