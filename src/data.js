import { FaHome } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoMdMailOpen } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import cpp from "../src/Assets/cpp.png"
import mongoDb from "../src/Assets/mongodb.png"
import expressjs from "../src/Assets/expressjs.png"
import react from "../src/Assets/react.png"
import nodejs from "../src/Assets/nodejs.png"

export const navData = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icons" />,
    path: "/home",
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
  {
    id: 4,
    name: "Contact",
    icon: <IoMdMailOpen className="nav-icons" />,
    path: "/contact",
  },
];

export const socialMediaIcon = [
    {
        id: 1,
        icon: <FaInstagram className="social-media-icon" />,
        path: "www.instagram.com",
    },
    {
        id: 2,
        icon: <FaLinkedin className="social-media-icon" />,
        path: "www.instagram.com",
    },
    {
        id: 3,
        icon: <FaGithub className="social-media-icon" />,
        path: "www.instagram.com",
    },
]

export const skillsIcons = [
    {
        id: 1,
        img: <img src={cpp}  className="skills-icon-wrapper" alt="" />,
        name: "C++",
    },
    {
        id: 2,
        img: <img src={react}  className="skills-icon-wrapper" alt="" />,
        name: "React js",
    },
    {
        id: 1,
        img: <img src={mongoDb}  className="skills-icon-wrapper" alt="" />,
        name: "Mongo DB"
    },
    {
        id: 1,
        img: <img src={expressjs}  className="skills-icon-wrapper" alt="" />,
        name: "Express Js"
    },
    {
        id: 1,
        img: <img src={nodejs}  className="skills-icon-wrapper" alt="" />,
        name: "Node Js"
    }
]
