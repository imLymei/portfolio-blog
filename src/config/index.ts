export const APP_CONFIG = {
  title: "Felipe Cardoso",
  description: "WIP",
};

export type NavbarItem = {
  title: string;
  href: string;
};

export const NAVBAR_ITENS: NavbarItem[] = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
];

export const ICON_SIZE = {
  EXTRA_SMALL: 20,
  SMALL: 30,
  MEDIUM: 40,
  LARGE: 50,
  EXTRA_LARGE: 60,
};

import { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaAws,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

export const SKILLS: { icon: IconType; title: string }[] = [
  { icon: BiLogoTypescript, title: "Typescript" },
  { icon: FaNodeJs, title: "Node.js" },
  { icon: RiNextjsFill, title: "Next.js" },
  { icon: RiTailwindCssFill, title: "Tailwind CSS" },
  { icon: FaDatabase, title: "Database Management" },
  { icon: FaGitAlt, title: "Git" },
  { icon: FaPython, title: "Python" },
  { icon: TbBrandCSharp, title: "C#" },
  { icon: FaAws, title: "AWS" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repository: string;
  image: string;
};

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    repository: "https://github.com/yourusername/portfolio-website",
    image: "/images/placeholder.png",
  },
  {
    title: "Todo List App",
    description: "A simple todo list application to track daily tasks.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    repository: "https://github.com/yourusername/todo-list-app",
    image: "/images/placeholder.png",
  },
  {
    title: "Weather App",
    description:
      "A weather application that displays weather information using an external API.",
    tags: ["JavaScript", "API", "CSS", "HTML"],
    repository: "https://github.com/yourusername/weather-app",
    image: "/images/placeholder.png",
  },
];
