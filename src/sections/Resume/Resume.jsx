import React from 'react';
import './Resume.css';

function Resume() {
  const frontEndSkills = [
    "HTML & CSS", 
    "Advanced CSS", 
    "JavaScript ES6+", 
    "Bootstrap", 
    "JQuery",
    "React", 
    "State", 
    "Progressive Web Applications (PWA)"
  ];

  const backEndSkills = [
    "Node.js", 
    "Express", 
    "Server-Side APIs", 
    "Web APIs",
    "Third-Party APIs",
    "MongoDB", 
    "MySQL", 
    "NoSQL", 
    "Object-Relational Mapping (ORM)", 
    "Model-View-Controller (MVC)", 
    "GraphQL", 
    "Sequelize"
  ];

  const devOpsAndMore = [
    "Git", 
    "Heroku", 
    "Netlify", 
    "Agile development",
    "MERN"
  ];

  const otherSkills = [
    "Computer Science for JavaScript", 
    "Dell client foundations 2021",
    "Microsoft Office 2013", 
    "TOTVS Protheus"
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
      <a href="/Resume Diego Araujo.pdf" download target="_blank" rel="noopener noreferrer">Download My Resume</a>
      </p>
      <h3>Front-End Proficiencies</h3>
      <ul>{frontEndSkills.map(skill => <li key={skill}>{skill}</li>)}</ul>

      <h3>Back-End Proficiencies</h3>
      <ul>{backEndSkills.map(skill => <li key={skill}>{skill}</li>)}</ul>

      <h3>Development Operations and More</h3>
      <ul>{devOpsAndMore.map(skill => <li key={skill}>{skill}</li>)}</ul>

      <h3>Other Skills</h3>
      <ul>{otherSkills.map(skill => <li key={skill}>{skill}</li>)}</ul>
    </section>
  );
}

export default Resume;
