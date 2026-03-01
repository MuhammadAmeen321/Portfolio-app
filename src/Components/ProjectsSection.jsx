import ProjectCard from "./ProjectCard";

function ProjectsSection({ section, projects, onOpenProject }) {
  return (
    <section className="section" id="projects">
      <div className="section__heading">
        <p>{section.eyebrow}</p>
        <h3>{section.title}</h3>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={onOpenProject}
            actionLabel={section.cardActionLabel}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
