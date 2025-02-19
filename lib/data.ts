import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import signmail from "@/public/SignMail.jpg";
import mimedia from "@/public/mimedia1.jpg";
import favorway from "@/public/Favorway.jpg";
import aandm from "@/public/Astrid & Miyu.jpeg";
import aim from "@/public/Asian Institute M.jpg";
import breathe from "@/public/breathe.jpg";
import { sign } from "crypto";

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
    title: "Senior Full-Stack Developer @ Mercury Development LLC",
    location: "Miami, United States",
    description:
      "I'm now working as a full-stack developer. My stack includes React, Next.js, TypeScript, Node.js, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Apr 2022 - Present",
  },
  {
    title: "Full-Stack Developer @ BearPlex",
    location: "Delaware, United States",
    description:
      "I worked on several projects using a tech stack that includes React.js, Next.js, Tailwind CSS, Node.js, and GraphQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2019 - Mar 2022",
  },
  {
    title: "Junior & Software Developer @ High6",
    location: "Manila, Philippines",
    description:
      "Completed my graduation in Computer Science and Engineering.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2017 - Mar 2018",
  },
  {
    title: "University of the Cordilleras",
    location: "Philippines",
    description:
      "Completed my graduation in Computer Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2017 - Mar 2018",
  },
] as const;

export const projectsData = [
  {
    title: "SignMail",
    description:
      "A playful yet professional website for SignMail, a SaaS software to design interactive email signatures with ease. NextJS, TailwindCSS and Headless CMS.",
    tags: ["Next.js", "Tailwind CSS", "Headless CMS"],
    imageUrl: signmail,
  },
  {
    title: "mimedia",
    description:
      "A media platform enables content creation, distribution, and streaming with seamless user engagement and scalable digital media management.",
    tags: ["Java", "React.js", "PostgreSQL", "RabbitMQ"],
    imageUrl: mimedia,
  },
  {
    title: "Favorway",
    description:
      "A healthcare platform streamlines patient management, telemedicine, and data-driven insights to enhance medical services and operational efficiency.",
    tags: ["Django", "React.js", "GraphQL"],
    imageUrl: favorway,
  },
  {
    title: "AIM",
    description:
      "An education management platform streamlines learning, administration, and collaboration by integrating course management, student tracking, and digital assessments.",
    tags: ["Angular", "C#", "WebRTC"],
    imageUrl: aim,
  },
  {
    title: "Astrid & Miyu",
    description:
      "Comprehensive e-commerce platform for Astrid & Miyu, showcasing unique jewelry and fostering community support.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: aandm,
  },
  {
    title: "Breathe",
    description:
      "A premium sportswear brand committed to combining peak performance with unparalleled style and sustainability.",
    tags: ["Shopify"],
    imageUrl: breathe,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "C#",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "Ruby",
  "React",
  "Angular",
  "Next.js",
  "Spring Boot",
  ".NET",
  "ASP.NET",
  "Django",
  "Flask",
  "Node.js",
  "Express",
  "NestJS",
  "REST API",
  "GraphQL",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Git",
  "Docker",
  "Kubernetes",
  "Tailwind CSS",
  "AWS",
  "Azure"
] as const;