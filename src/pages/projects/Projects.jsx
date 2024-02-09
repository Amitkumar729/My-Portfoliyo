import React from "react";
import "./projects.css";
import { projectsData } from "../../data";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="projects-header">
          <h3>My Projects</h3>
        </div>
        <div className="projects-wrapper">
          {projectsData.map(
            (
              { img, techText, featuresText, icon1, icon2, path1, path2, name },
              idx
            ) => {
              return (
                <>
                  <div className="projects-content" key={idx}>
                    <div className="projects-photo-wrapper">{img}</div>
                    <div className="projects-text">
                      <div className="projects-tech">{techText}</div>
                      <div className="projects-features">{featuresText}</div>
                    </div>
                    <div className="projects-icons-wrapper">
                      <a href={path1} target="_blank" rel="noopener noreferrer">
                        {icon1}
                      </a>
                      <a href={path2} target="_blank" rel="noopener noreferrer">
                        {icon2}
                      </a>
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
