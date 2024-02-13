import { FaHome } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { GoFileDirectoryFill } from "react-icons/go";
import cpp from "../src/Assets/cpp.png";
import mongoDb from "../src/Assets/mongodb.png";
import expressjs from "../src/Assets/expressjs.png";
import react from "../src/Assets/react.png";
import nodejs from "../src/Assets/nodejs.png";
import instagram from "../src/Assets/instagram.png";
import linkedin from "../src/Assets/linkedin.jpg";
import github from "../src/Assets/github.png";
import link from "../src/Assets/link.jpg";
import chatApp from "../src/Assets/chatApp.png";
import googleClone from "../src/Assets/googleClone.png";
import textUtility from "../src/Assets/textUtility.png";
import js from "../src/Assets/js.png";

export const navData = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icons" />,
    path: "/",
  },
  {
    id: 2,
    name: "Skills",
    icon: <TbBulb className="nav-icons" />,
    path: "/skills",
  },
  {
    id: 3,
    name: "Projects",
    icon: <GoFileDirectoryFill className="nav-icons" />,
    path: "/projects",
  },
];

export const socialMediaIcon = [
  {
    id: 1,
    // icon: <FaInstagram className="social-media-icon" />,
    icon: <img src={instagram} alt="" className="social-media-icon" />,
    path: "https://www.instagram.com/_amitgupta09/",
  },
  {
    id: 2,
    icon: <img src={linkedin} alt="" className="social-media-icon" />,
    path: "https://www.linkedin.com/in/amitkumar729/",
  },
  {
    id: 3,
    icon: <img src={github} alt="" className="social-media-icon" />,
    path: "https://github.com/Amitkumar729",
  },
];

export const skillsIcons = [
  {
    id: 1,
    img: <img src={cpp} className="skills-icon-wrapper" alt="" />,
    name: "C++",
  },
  {
    id: 2,
    img: <img src={js} className="skills-icon-wrapper" alt="" />,
    name: "Java Script",
  },
  {
    id: 3,
    img: <img src={react} className="skills-icon-wrapper" alt="" />,
    name: "React js",
  },
  {
    id: 4,
    img: <img src={mongoDb} className="skills-icon-wrapper" alt="" />,
    name: "Mongo DB",
  },
  {
    id: 5,
    img: <img src={expressjs} className="skills-icon-wrapper" alt="" />,
    name: "Express Js",
  },
  {
    id: 6,
    img: <img src={nodejs} className="skills-icon-wrapper" alt="" />,
    name: "Node Js",
  },
];

export const projectsData = [
  {
    id: 1,
    img: <img src={chatApp} alt="" className="projects-photo" />,
    techText: <h5>React.js, Redux, CSS, Material-UI</h5>,
    featuresText: (
      <h5>
        One to One message, Group-Message, Call Records, Different color theme, full screen mode, contact info
      </h5>
    ),
    icon1: <img src={github} alt="" className="projects-icons" />,
    path1: "https://github.com/Amitkumar729/Chat-App",
    icon2: <img src={link} alt="" className="projects-icons" />,
    path2: "https://chat-app-a781a.web.app/app",
    name: <h4>Chat Application</h4>,
  },
  {
    id: 2,
    img: <img src={googleClone} alt="" className="projects-photo" />,
    techText: <h5>React js, Redux, CSS, Material-UI, API</h5>,
    featuresText: (
      <h5>
        This is a Google Search Engine Clone, which can search anything like
        Google Chrome browser.
      </h5>
    ),
    icon1: <img src={github} alt="" className="projects-icons" />,
    path1: "https://github.com/Amitkumar729/Google-clone",
    icon2: <img src={link} alt="" className="projects-icons" />,
    path2: "https://clone-8b904.web.app/",
    name: <h4>Google Clone</h4>,
  },
  {
    id: 3,
    img: <img src={textUtility} alt="" className="projects-photo" />,
    techText: <h5>React js, Bootstrap, Material-UI</h5>,
    featuresText: (
      <h5>
        Dark Mode, Lowercase, Uppercase, Word & Character counts, Extra space
        management.
      </h5>
    ),
    icon1: <img src={github} alt="" className="projects-icons" />,
    path1: "https://github.com/Amitkumar729/Textutils-React-WebApp",
    icon2: <img src={link} alt="" className="projects-icons" />,
    path2: "https://textutils-webapp.web.app/",
    name: <h4>Text Utility Web App</h4>,
  },
];
