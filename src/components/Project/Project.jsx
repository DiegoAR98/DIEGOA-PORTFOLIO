function Project({ title, description, imageUrl, liveUrl, repoUrl }) {
  return (
    <div className="project">
      <div className="project-title">{title}</div>
      <img src={imageUrl} alt={`Screenshot of ${title}`} />
      <p>{description}</p>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
}
