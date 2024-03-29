import React from "react";
import "./frontpage.css";
import photo from "../../Assets/photo.jpg";
import logo from "../../Assets/logo.jpeg";
import { socialMediaIcon } from "../../data";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import gmail from "../../Assets/gmail.webp";
import Footer from "../../components/footer/Footer";

const Frontpage = () => {
  return (
    <>
      <div className="main-container">
        <div className="logo-container">
          <img className="logo-wrapper" src={logo} alt="" />
          <div className="logo-text">
            <h3>Street Coding</h3>
          </div>
          <div className="gmail-container">
            <img src={gmail} alt="" className="gmail-icon" />
            <h3>Ak068010@gmail.com</h3>
          </div>
        </div>
        <div className="sub-main-container">
          <div className="img-container">
            <div className="div-style-wrapper"></div>
            <img src={photo} alt="" className="img-wrapper" />
          </div>
          <div className="text-container">
            <div className="name-container">
              <h2>I'm Amit Kumar</h2>
            </div>
            <div className="post-container">
              <h3>Web Developer</h3>
            </div>
            <div className="about-container">
              <h4>
              I am eager to leverage my expertise and continue expanding my skills by joining a dynamic organization that fosters continuous learning and growth. I am committed to contributing my utmost efforts to make meaningful contributions to the team.
              </h4>
            </div>
            <div className="skills-icon-container">
              {socialMediaIcon.map(({ icon, path }, idx) => {
                return (
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Skills />
      <Projects />
      <Footer/>
    </>
  );
};

export default Frontpage;
