import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ReadmeModal from "./ReadmeModal";

function PortfolioPage({ profile, projects, projectsSection, contact, footer }) {
  const [activeProject, setActiveProject] = useState(null);
  const [readmeContent, setReadmeContent] = useState("");
  const [readmeState, setReadmeState] = useState("idle");

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    let isMounted = true;
    setReadmeState("loading");
    setReadmeContent("");

    fetch(activeProject.readmePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("README could not be loaded");
        }
        return response.text();
      })
      .then((text) => {
        if (isMounted) {
          setReadmeContent(text);
          setReadmeState("ready");
        }
      })
      .catch(() => {
        if (isMounted) {
          setReadmeState("error");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [activeProject]);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <div className="portfolio-app">
      <HeroSection profile={profile} />

      <main className="content">
        <ProjectsSection
          section={projectsSection}
          projects={projects}
          onOpenProject={setActiveProject}
        />
        <ContactSection contact={contact} />
      </main>

      <Footer profile={profile} footer={footer} />

      <ReadmeModal
        project={activeProject}
        readmeState={readmeState}
        readmeContent={readmeContent}
        onClose={() => setActiveProject(null)}
        ui={projectsSection.readmeModal}
      />
    </div>
  );
}

export default PortfolioPage;
