import "./App.css";
import profilePic from "../profile pic.jpg";
import PortfolioPage from "./components/PortfolioPage";
import {
  contactData,
  footerData,
  profileData,
  projectsData,
  projectsSectionData,
} from "./data/portfolioData";

function App() {
  const profile = {
    ...profileData,
    imageSrc: profilePic,
  };

  return (
    <PortfolioPage
      profile={profile}
      projects={projectsData}
      projectsSection={projectsSectionData}
      contact={contactData}
      footer={footerData}
    />
  );
}

export default App;
