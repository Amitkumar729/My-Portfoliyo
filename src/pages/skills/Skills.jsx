import React from "react";
import "./skills.css";
import { skillsIcons } from "../../data";

const Skills = () => {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h3>My Skills</h3>
        </div>
        <div className="skills-container">
          
            {skillsIcons.map(({ img, name }, idx) => {
              return (
                <>
                <div className="skills-container-wrapper">
                <div className="skills-icon" key={idx}>
                {img}
              </div>
              <div className="skills-name">
                <h5>{name}</h5>
              </div>
                </div>
                 
                </>
              );
            })}
          
        </div>
      </div>
    </>
  );
};

export default Skills;
