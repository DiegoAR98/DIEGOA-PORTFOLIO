import React from "react";
import './Project.css';

function Project({ title, description, imageUrl, liveUrl, repoUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={`Screenshot of ${title}`} className="project-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
}

export default Project;
