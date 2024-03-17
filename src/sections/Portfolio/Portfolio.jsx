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
    {
      title: "JavaScript Code Quiz Game",
      description: "Introducing the JavaScript Code Quiz Game! This interactive app tests your JavaScript knowledge with timed questions, adding a time penalty for incorrect answers. Compete by recording your initials and scores. Ready to play? Let's dive in!",
      imageUrl: "https://github.com/DiegoAR98/Code-Quiz/blob/main/assets/Screenshot%202023-11-11%20082245.png?raw=true",
      liveUrl: "https://diegoar98.github.io/Code-Quiz/",
      repoUrl: "https://github.com/DiegoAR98/Code-Quiz?tab=readme-ov-file",
    },
    {
      title: "Password-Generator",
      description: "The Password Generator creates strong, secure passwords with customizable options for length and character types. It's user-friendly, accessible across platforms, and prioritizes privacy and security..",
      imageUrl: "https://github.com/DiegoAR98/Password-Generator/blob/main/assets/03-javascript-homework-demo.png?raw=true",
      liveUrl: "https://diegoar98.github.io/Password-Generator/",
      repoUrl: "https://github.com/DiegoAR98/Password-Generator?tab=readme-ov-file",
    },
    {
      title: "National Parks: A Quintet of Natural Wonders",
      description: "National Parks: A Quintet of Natural Wonders is a web app for exploring and planning trips to the top 5 US national parks. Packed with detailed info and trip tips, it's your go-to for unforgettable outdoor adventures, whether you're a seasoned traveler or a novice explorer..",
      imageUrl: "https://github.com/DiegoAR98/Project-1/blob/main/assets/project-ss.png?raw=true",
      liveUrl: "https://diegoar98.github.io/Project-1/",
      repoUrl: "https://github.com/DiegoAR98/Project-1?tab=readme-ov-file",
    },
            
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
