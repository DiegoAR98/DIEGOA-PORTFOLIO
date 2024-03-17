import React from "react";
import './Project.css';

function Project({ title, description, imageUrl, liveUrl, repoUrl }) {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <img src={imageUrl} alt={`Screenshot of ${title}`} />
      <p>{description}</p>
      <div className="button-container">
        <a href={liveUrl} className="live-demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={repoUrl} className="view-code" target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
  );
}


export default Project;
