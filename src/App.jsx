import { useEffect, useState } from "react";
import "./App.css";
import profilePic from "../profile pic.jpg";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ReadmeModal from "./components/ReadmeModal";
import { contactData, profileData, projectsData } from "./data/portfolioData";

function App() {
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
      <HeroSection profile={profileData} profileImage={profilePic} />

      <main className="content">
        <ProjectsSection projects={projectsData} onOpenProject={setActiveProject} />
        <ContactSection profile={profileData} contact={contactData} />
      </main>

      <Footer profile={profileData} />

      <ReadmeModal
        project={activeProject}
        readmeState={readmeState}
        readmeContent={readmeContent}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

export default App;
