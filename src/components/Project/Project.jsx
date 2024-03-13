import React from "react";
import './Project.css'; // Style your project component as needed

function Project({ title, description, imageUrl, liveUrl, repoUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={`Screenshot of ${title}`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
}

export default Project;
