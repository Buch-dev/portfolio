import moviebox from "@/public/moviebox.png";
import nysc from "@/public/nysc.png";
import shopify from "@/public/shopify.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Graduated bootcamp",
    location: "Lagos, Nigeria",
    description:
      "I graduated after 12 months of studying. I immediately found an internship as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I volunteered worked as a front-end developer intern for 3 month in a non-profit organization.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Front-End Developer Intern at NexaScale",
    location: "Remote",
    description:
      "I got employed as a Front-End developer intern. Worked pending production",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer (Freelancer)",
    location: "Remote, Hybrid, Onsite",
    description:
      "I'm now a frontend developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "MovieBox",
    description:
      "I worked on a movie app task during my HNG internship.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: moviebox,
  },
  {
    title: "Shopify Admin dashboard",
    description:
      "Shopify dashboard using just HTML, CSS, and JavaScript. It exposed me to web accessibility for versatality",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: shopify,
  },
  {
    title: "Koppa",
    description:
      "A public open-source web app for easy primary place of assignment for nysc corpers looking related to their field of interest. I worked on the user interface",
    tags: ["Vue", "Tailwind"],
    imageUrl: nysc,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Nuxt.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "SCSS",
  "PostgreSQL",
  "Framer Motion",
] as const;