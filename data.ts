import { RiComputerLine, RiTeamFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {
  AiFillApi,
  AiFillSafetyCertificate,
  AiOutlineAntDesign,
  AiOutlineApi,
} from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";
import { SiAccenture, SiTata } from "react-icons/si";

import { BsCircleFill } from "react-icons/bs";
import { GiTeamIdea } from "react-icons/gi";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Fullstack Development",
    about:
      "I can build an elegant and scalable SPA using <b>React/Angular</b> <b>TypeScript</b> <b>Node.js</b> <b>Javascript</b> and <b>Express.js</b>",
  },
  {
    Icon: RiTeamFill,
    title: "Leadership Experiance",
    about:
      "Leading team of 4 developers for on time delivery and meeting all client requirments",
  },
  {
    Icon: MdDeveloperMode,
    title: "Microservices developmet",
    about:
      "Designed and develped microservice using <b>React </b> and <b>Next.Js</b> framework",
  },
  {
    Icon: AiFillApi,
    title: "Managing Rest Api",
    about:
      "Managing backend API response for dynamically rendering application component for better user experience",
  },
  {
    Icon: GiTeamIdea,
    title: "Agile Methodology",
    about:
      "Working in Agile for results-focused approach to s/w development that respects our rapidly changing world.",
  },
  {
    Icon: AiFillSafetyCertificate,
    title: "Certifications",
    about: `Azure AZ-900 (2020),   <br>
      NCFM Intermediate Module (2019),   <br> 
      NCFM Beginners Module (2018)
      `,
  },
];

export const languages: ISkill[] = [
  {
    name: "React",
    level: "80",
    Icon: BsCircleFill,
  },
  {
    name: "Angular",
    level: "70",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "60",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "80",
    Icon: BsCircleFill,
  },
  {
    name: "NextJs",
    level: "65",
    Icon: BsCircleFill,
  },
  {
    name: "Mongodb",
    level: "50",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Jenkins",
    level: "60",
    Icon: BsCircleFill,
  },
  {
    name: "VS Code",
    level: "70",
    Icon: BsCircleFill,
  },
  {
    name: "Git",
    level: "70",
    Icon: BsCircleFill,
  },
  {
    name: "AEM CMS",
    level: "60",
    Icon: BsCircleFill,
  },
  {
    name: "Veracode",
    level: "50",
    Icon: BsCircleFill,
  },
  {
    name: "Jira",
    level: "60",
    Icon: BsCircleFill,
  },
  {
    name: "Concerto",
    level: "70",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "World News reader AI",
    description: `Artificial Intelligence based World News app, created using ReactJs, Alan AI, JavaScript, Material-UI, HTML and CSS. `,
    image_path: "/images/reader.png",
    deployed_url: "https://sunny-world-news.netlify.app/",
    github_url: "https://sunny-world-news.netlify.app/",
    company: "",
    client: "click here to visit",
    duration: ``,
    category: ["fullstack"],
    key_techs: ["Alan AI", "JavaScript", "React", "Typescript", "Material UI"],
    company_Icon: null,
    client_Icon: null,
  },
  {
    id: 2,
    name: "Sunny's Chat",
    description: `Chat app for creating personal room with friends or family to have funny discussion. 
    Please feel free to visit the site and create your own personal room. 
    Note: No chats are stored. `,
    image_path: "/images/schat.png",
    deployed_url: "https://sunny-wassup.netlify.app/",
    github_url: "https://sunny-wassup.netlify.app/",
    company: "",
    client: "click here to visit",
    duration: ``,
    category: ["fullstack"],
    key_techs: [
      "Websocket",
      "Node.js",
      "Express.js",
      "JavaScript",
      "React",
      "Typescript",
      "Material UI",
    ],
    company_Icon: null,
    client_Icon: null,
  },
  {
    id: 3,
    name: "Memories Collection",
    description: `MERN Stack app for storing your exciting memories with your loved ones. 
    please feel free to visit my memories-app on attached url and share your upload your image or put like on existing images.`,
    image_path: "/images/memories.png",
    deployed_url: "https://memories-fromsunny.netlify.app/",
    github_url: "https://memories-fromsunny.netlify.app/",
    company: "",
    client: "click here to visit",
    duration: ``,
    category: ["fullstack"],
    key_techs: [
      "Node.js",
      "Express.js",
      "React",
      "Typescript",
      "Mongodb",
      "Mongoose",
      "Material UI",
    ],
    company_Icon: SiAccenture,
    client_Icon: SiAccenture,
  },
  {
    id: 4,
    name: "Dtv-Channel-Opt-In",
    description: `Channel-opt-in is the microservice application to allow customer updating or downgrading their existing base
    package on DirecTV Now app and wanted to keep watching the channels which are not included in new base
    package at some additional cost. `,
    image_path: "/images/directv.png",
    deployed_url: "https://www.directv.com/channel-opt-in/",
    github_url: "https://www.accenture.com/in-en",
    company: "Accenture",
    client: "AT&T",
    duration: `From June 2021 to till date`,
    category: ["react"],
    key_techs: ["React", "Typescript", "Node.js", "Express.js", "Material UI"],
    company_Icon: SiAccenture,
    client_Icon: SiAccenture,
  },
  {
    id: 5,
    name: "At&T Tv",
    description: `The application allows the customer to buy or update the DirecTV base packages with ability to compare between
    multiple plans and add the additional premium channels and devices to there existing or new account.`,
    image_path: "/images/att tv.jpg",
    deployed_url: "https://www.att.com/",
    github_url: "https://www.accenture.com/in-en",
    company: "Accenture",
    client: "AT&T",
    duration: `From January 2021 to till date`,
    category: ["react"],
    key_techs: ["React", "Typescript", "Node.js", "Express.js"],
    company_Icon: SiAccenture,
    client_Icon: SiAccenture,
  },
  {
    id: 6,
    name: "Watch Tv",
    description: `The application allows AT&T customer with existing eligible plan to add or remove the premium boltons to their
    accounts for term period of there choice.`,
    image_path: "/images/watchtv.jpg",
    deployed_url: "https://www.attwatchtv.com/",
    github_url: "https://www.accenture.com/in-en",
    company: "Accenture",
    client: "AT&T",
    duration: `From January 2020 to March 2021`,
    category: ["angular"],
    key_techs: ["Angular", "Typescript"],
    company_Icon: SiAccenture,
    client_Icon: SiAccenture,
  },
  {
    id: 7,
    name: "ISDM",
    description: `The Index and Security Data Management webpage is use for analysis of Indexes and Stocks of the United States, the webpage help the Vanguard stocks
    broker team and business agents to perform market analysis and compare the share prices of pears stocks for
    making a better trade.`,
    image_path: "/images/idsm.jpg",
    deployed_url: "https://investor.vanguard.com/corporate-portal/",
    github_url: "https://www.tcs.com/",
    company: "TCS",
    client: "Vanguard",
    duration: `From April 2018 to December 2019`,
    category: ["angular"],
    key_techs: ["Angular", "Typescript", "Angular-Material"],
    company_Icon: SiTata,
    client_Icon: SiAccenture,
  },
  {
    id: 8,
    name: "NeoXam Regression Automation",
    description: `NeoXam is a DataHub GUI which work as a data repository of financial data, provided by different vanguard
    application and help implement various validation condition to make a perfect synchronization of data between
    providers`,
    image_path: "/images/neoxam.png",
    deployed_url: "https://investor.vanguard.com/corporate-portal/",
    github_url: "https://www.tcs.com/",
    company: "TCS",
    client: "Vanguard",
    duration: `From July 2017 to April 2018`,
    category: ["automation"],
    key_techs: ["Selenium", "Java", "Cucumber", "Maven"],
    company_Icon: SiTata,
    client_Icon: SiAccenture,
  },
  {
    id: 9,
    name: "CRD Regression Automation",
    description: `Charles-River is a GUI which handles all the inputs, match the orders and generate the trade automatically based
    on Charles-River development`,
    image_path: "/images/CRD.jpg",
    deployed_url: "https://investor.vanguard.com/corporate-portal/",
    github_url: "https://www.tcs.com/",
    company: "TCS",
    client: "Vanguard",
    duration: `From Oct 2016 to June 2017`,
    category: ["automation"],
    key_techs: ["Java", "HP-LeanFt", "Cucumber", "Maven"],
    company_Icon: SiTata,
    client_Icon: SiAccenture,
  },
];
