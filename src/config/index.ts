import { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaAws,
} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

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
      "This very site you are looking at! It's my portfolio blog where i showcase my abilities and progress as a developer.",
    tags: ["Typescript", "Next.js", "Tailwind CSS", "MDX"],
    repository: "https://github.com/imLymei/portfolio-blog",
    image: "/images/projects/portfolio.png",
  },
  {
    title: "Front End Challenge",
    description:
      "A simple front end challenge with three steps: A roman number converter, Conway's game of life and a Restaurant bill splitter.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    repository: "https://github.com/imLymei/desafios-rdo",
    image: "/images/projects/challenge.png",
  },
  {
    title: "Job hunting platform for developers",
    description:
      "A simple job hunting platform made for enterprises to find developers to help their projects.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "API", "MongoDB"],
    repository: "https://github.com/yourusername/weather-app",
    image: "/images/projects/korjata.png",
  },
];

export const SOCIAL_LINKS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/imlymei" },
  { icon: FaGithub, href: "https://github.com/imLymei" },
];
