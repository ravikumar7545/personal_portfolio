import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandThreejs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiPython, SiRedux } from "react-icons/si";
import { firstList, secondList, thirdList } from "../components/Skills";

export const frontend_skills = [
  {
    Icon: FaReact,
    skill_name: "React Js",
    skill_level: "Experienced",
    variations_level: firstList,
  },
  {
    Icon: FaReact,
    skill_name: "Next JS",
    skill_level: "Intermediate",
    variations_level: firstList,
  },
  {
    Icon: AiOutlineHtml5,
    skill_name: "HTML",
    skill_level: "Experienced",
    variations_level: secondList,
  },
  {
    Icon: DiCss3,
    skill_name: "CSS/SCSS",
    skill_level: "Experienced",
    variations_level: secondList,
  },
  {
    Icon: RiJavascriptLine,
    skill_name: "Javascript",
    skill_level: "Experienced",
    variations_level: thirdList,
  },
  {
    Icon: BiLogoTypescript,
    skill_name: "Typescript",
    skill_level: "Intermediate",
    variations_level: thirdList,
  },
];

export const backend_skills = [
  {
    Icon: FaNode,
    skill_name: "Node JS",
    skill_level: "Experienced",
    variations_level: firstList,
  },
  {
    Icon: SiExpress,
    skill_name: "Express JS",
    skill_level: "Experienced",
    variations_level: firstList,
  },
  {
    Icon: SiMongodb,
    skill_name: "MONGO DB",
    skill_level: "Experienced",
    variations_level: secondList,
  },
  {
    Icon: SiMongodb,
    skill_name: "Mongoose",
    skill_level: "Experienced",
    variations_level: secondList,
  },
];

export const other_skills = [
  {
    Icon: SiPython,
    skill_name: "Python",
    skill_level: "Experienced",
    variations_level: firstList,
  },
  {
    Icon: SiRedux,
    skill_name: "Redux",
    skill_level: "Experienced",
    variations_level: firstList,
  },
  {
    Icon: TbBrandFramerMotion,
    skill_name: "Framer Motion",
    skill_level: "Intermediate",
    variations_level: secondList,
  },
  {
    Icon: TbBrandThreejs,
    skill_name: "Three JS",
    skill_level: "Begineer",
    variations_level: secondList,
  },
];
