import { RiComputerLine } from "react-icons/ri";
import { IServices, ISkill, IProject, Category } from "./type";
import { FaServer, FaPython, FaReact, FaMicrosoft } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BiDrink } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";
import {
  SiJavascript,
  SiGoland,
  SiTypescript,
  SiCsharp,
  SiUnity,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiExpress,
} from "react-icons/si";

export const services: IServices[] = [
  {
    title: "Frontend Dev",    
    Icon: RiComputerLine,
  },
  {
    title: "Backend Dev",    
    Icon: FaServer,
  },
  {
    title: "API Development",    
    Icon: AiOutlineApi,
  },
];

export const Languages: ISkill[] = [
  {
    name: "Python",
    Icon: FaPython,
    lvl: "Intermediate",
  },
  {
    name: "javascript",
    Icon: SiJavascript,
    lvl: "Advanced",
  },
  {
    name: "GoLang",
    Icon: SiGoland,
    lvl: "Intermediate",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    lvl: "Intermediate",
  },
  {
    name: "C#",
    Icon: SiCsharp,
    lvl: "Learning",
  },
];

// {
//   name: "PostreSQL",
//   Icon: SiPostgresql,
//   lvl: "Advanced",
// },
// {
//   name: "MongoDB",
//   Icon: SiMongodb,
//   lvl: "Intermediate",
// },

export const Frameworks: ISkill[] = [
  {
    name: "React",
    Icon: FaReact,
    lvl: "Advanced",
  },
  {
    name: "Django",
    Icon: SiDjango,
    lvl: "Advanced",
  },
  {
    name: "ASP.Net core",
    Icon: FaMicrosoft,
    lvl: "Learning",
  },
  {
    name: "Express",
    Icon: SiExpress,
    lvl: "Advanced",
  },
  {
    name: "Gin&Gonic",
    Icon: BiDrink,
    lvl: "Intermediate",
  },
];

export const projects: IProject[] = [
  {
    name: "ImageUploaderTS",
    github_url: "https://github.com/JuanMira/imageuploaderts",
    category: ["Typescript", "Express", "Mongo"],
    description: "Image uploader in ts and express",
    key_techs: ["Express", "Typescript", " Mongo", "REST"],
  },
  {
    name: "SellPointGO",
    github_url: "https://github.com/JuanMira/SellPointGo",
    category: ["GoLang", "PostgreSQL"],
    description: "Sellpoint made in golang and postgre ",
    key_techs: ["Golang", " PostgreSQL", "Gin & Gonic", "REST"],
  },
  {
    name: "TweetGO",
    github_url: "https://github.com/JuanMira/TwwetGo",
    category: ["GoLang", "Mongo"],
    description: "A tweeter clon with golang and mongo",
    key_techs: ["Golang", "Mongo", "REST"],
  },
  {
    name: "React Spotify CLON",
    github_url: "https://github.com/JuanMira/react_spotify_clon",
    category: ["React"],
    description: "A sporify clon made with react and firebase",
    key_techs: ["React", "Semantic UI", "Firebase"],
  },
  {
    name: "WattFakeApp Front",
    github_url: "https://github.com/JuanMira/wattfakeapp",
    category: ["React"],
    description: "A app with the simple features of wattpad",
    key_techs: ["React", "Firebase", "Semantic UI"],
  },
  {
    name: "WattFakeApp Server",
    github_url: "https://github.com/JuanMira/wattefakepad-server",
    category: ["Express", "Mongo"],
    description: "The server for my own simple wattpad clon",
    key_techs: ["NodeJS", "Express", "Mongo", "REST"],
  },
  {
    name: "DJANGO Movies site",
    github_url: "https://github.com/JuanMira/django_laboratory",
    category: ["Python", "PostgreSQL", "Django"],
    description: "A site for movies, because i love movies",
    key_techs: ["Pyhton", "Django", "PostgreSQL"],
  },
  {
    name: "Veterinary",
    github_url: "https://github.com/JuanMira/ClinicaVeterinaria",
    category: ["Django", "Express", "PostgreSQL", "Mongo"],
    description:
      "A practice to learn about microservice, basically is a veterinary app to manage the control the pets who are adopted",
    key_techs: [
      "vue",
      "Microservices",
      "NodeJS",
      "Python",
      "Django",
      "Scrum",
      "JAVA",
      "SpringBoot",
    ],
  },
];
