import React from "react";
import "./projects.css";
import { projectsData } from "../../data";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="projects-header">
          <h3>My Projects</h3>
        </div>
        <div className="projects-wrapper">

        {projectsData.map(
          ({ img, techText, featuresText, icon1, icon2, path1, path2, name }, idx) => {
            return (
              <>
                
                  <div className="projects-content" key={idx} >
                    <div className="projects-photo-wrapper">
                      {img}
                    </div>
                    <div className="projects-text">
                      <div className="projects-tech">{techText}</div>
                      <div className="projects-features">{featuresText}</div>
                    </div>
                    <div className="projects-icons-wrapper">
                    <Link to={path1}>{icon1}</Link>
                    <Link to={path2}>{icon2}</Link>
                       
                    </div>
                    <div className="projects-name">{name}</div>
                  </div>
                
              </>
            );
          }
        )}
        </div>

      </div>
    </>
  );
};

export default Projects;
