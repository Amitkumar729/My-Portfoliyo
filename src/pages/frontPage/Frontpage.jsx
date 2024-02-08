import React from "react";
import "./frontpage.css";
import photo from "../../Assets/photo.jpg";
import logo from "../../Assets/logo.jpeg";
import { socialMediaIcon } from "../../data";
import { Link } from "react-router-dom";
import Skills from "../skills/Skills";

const Frontpage = () => {
  return (
    <>
    <div className="main-container">
      <div className="logo-container">
        <img className="logo-wrapper" src={logo} alt="" />
        <div className="logo-text">
          <h3>Street Coding</h3>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              dicta quaerat officiis voluptas nemo praesentium suscipit
              repellendus iusto et corrupti possimus, odio, dignissimos a sed
              asperiores hic. Qui laudantium repudiandae odio provident deserunt
              dolor vitae iste odit facere voluptate autem, animi eum cupiditate
              quibusdam. Placeat eius nesciunt fugit autem possimus.
            </h4>
          </div>
          <div className="skills-icon-container">
            {socialMediaIcon.map(({ icon, path }, idx) => {
              return <Link to={path}>{icon}</Link>;
            })}
          </div>
        </div>
      </div>
    </div>

    <Skills/>
    </>
  );
};

export default Frontpage;
