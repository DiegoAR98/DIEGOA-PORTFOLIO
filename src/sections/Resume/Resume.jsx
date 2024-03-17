
import React from 'react';
import './Resume.css'; 

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p><a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a></p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* more coming */}
      </ul>
    </section>
  );
}

export default Resume;
