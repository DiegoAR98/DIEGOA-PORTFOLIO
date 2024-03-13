import React from "react";
import Project from "../../components/Project/Project";
import './Portfolio.css'; // coming

function Portfolio() {
  const projects = [
    {
      title: "Student-Project-Organizer",
      description: "The Student Project Organizer is a comprehensive tool designed to help students manage their academic projects with efficiency and ease. This application offers functionalities to assign tasks, set deadlines, track progress, and much more, ensuring students stay organized and ahead in their academic journey.",
      imageUrl: "https://github.com/DiegoAR98/Student-Project-Organizer/blob/main/public/img/DEMO.jpg?raw=true",
      liveUrl: "https://student-project-organizer-f32e9a6cf079.herokuapp.com/",
      repoUrl: "https://github.com/DiegoAR98/Student-Project-Organizer",
    },
    // More projects coming
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
