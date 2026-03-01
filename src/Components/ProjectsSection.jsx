import ProjectCard from "./ProjectCard";

function ProjectsSection({ projects, onOpenProject }) {
  return (
    <section className="section" id="projects">
      <div className="section__heading">
        <p>Selected Projects</p>
        <h3>Click a card to view project README</h3>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
