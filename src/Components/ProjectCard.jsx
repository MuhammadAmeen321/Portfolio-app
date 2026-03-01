function ProjectCard({ project, onOpen, actionLabel }) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onOpen(project)}
      aria-label={`Open README for ${project.title}`}
    >
      <div className="project-card__media">
        <span className="project-card__tag">{project.tag}</span>
      </div>
      <div className="project-card__content">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <p className="impact">{project.impact}</p>
        <div className="chip-row">
          {project.stack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <span className="project-card__action">{actionLabel}</span>
      </div>
    </button>
  );
}

export default ProjectCard;
