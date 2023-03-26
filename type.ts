import { IconType } from "react-icons";

export interface IServices {
  title: string;  
  Icon: IconType;
}

export interface ISkill {
  name: string;
  Icon: IconType;
  lvl?: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path?: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category =
  | "React"
  | "GoLang"
  | "Express"
  | "Python"
  | "Typescript"
  | "Mongo"
  | "PostgreSQL"
  | "Django"
  | "CSharp";
