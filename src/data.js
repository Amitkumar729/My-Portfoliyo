import { FaHome } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoMdMailOpen } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
        id: 1,
        icon: <FaLinkedin className="social-media-icon" />,
        path: "www.instagram.com",
    },
    {
        id: 1,
        icon: <FaGithub className="social-media-icon" />,
        path: "www.instagram.com",
    },
]
