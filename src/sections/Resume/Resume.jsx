
import React from 'react';
import './Resume.css'; 

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p><a href="https://docs.google.com/document/d/1d2CMPY1w4BIr6Rjs-gItBbelLRV9fRLE/edit?usp=sharing&ouid=106644711663638408441&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Download My Resume</a></p>
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
