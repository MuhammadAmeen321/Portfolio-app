import "./App.css";

const profile = {
  name: "Dr. Ayesha Rahman",
  title: "Senior Data Scientist | Machine Learning & AI Strategy",
  location: "New York, USA",
  email: "ayesha.rahman.ds@example.com",
  summary:
    "Data scientist with 8+ years of experience delivering predictive modeling, NLP, and analytics platforms that improve business outcomes across finance, healthcare, and product growth.",
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "ML Models Deployed", value: "35+" },
    { label: "Avg. Uplift Delivered", value: "24%" },
  ],
};

const projects = [
  {
    title: "Customer Churn Prediction Platform",
    description:
      "Built an end-to-end churn intelligence system using XGBoost and SHAP to identify high-risk segments and recommend targeted retention actions.",
    impact: "Reduced quarterly churn by 18% and saved ~$2.1M ARR.",
    stack: ["Python", "XGBoost", "SHAP", "FastAPI", "AWS"],
  },
  {
    title: "Clinical NLP for Medical Records",
    description:
      "Developed a transformer-based NLP pipeline to extract diagnosis patterns and treatment timelines from unstructured patient notes.",
    impact: "Improved clinical coding speed by 32% with 0.91 F1 score.",
    stack: ["PyTorch", "Transformers", "spaCy", "Docker"],
  },
  {
    title: "Demand Forecasting Dashboard",
    description:
      "Designed a multivariate time-series forecasting solution integrated with an executive dashboard for inventory and planning decisions.",
    impact: "Cut stockout events by 27% across 6 regions.",
    stack: ["Prophet", "LightGBM", "Pandas", "Power BI"],
  },
];

const experience = [
  {
    role: "Senior Data Scientist",
    company: "Nexa Analytics",
    period: "2022 - Present",
    achievements: [
      "Led a team of 5 data scientists to deliver enterprise ML products for customer retention and fraud detection.",
      "Established MLOps pipelines with automated monitoring, reducing model drift incidents by 40%.",
      "Partnered with C-level stakeholders to align data strategy with revenue goals.",
    ],
  },
  {
    role: "Data Scientist",
    company: "HealthCore Insights",
    period: "2019 - 2022",
    achievements: [
      "Built NLP and computer vision solutions for claims validation and clinical decision support.",
      "Deployed explainable ML workflows for regulated healthcare environments.",
      "Mentored junior analysts and introduced experiment tracking standards.",
    ],
  },
  {
    role: "Data Analyst",
    company: "QuantEdge Labs",
    period: "2017 - 2019",
    achievements: [
      "Created KPI frameworks and automated reporting pipelines for product and marketing teams.",
      "Designed A/B testing analyses that guided feature prioritization.",
      "Improved dashboard adoption by building role-based self-service analytics.",
    ],
  },
];

const certifications = [
  "AWS Certified Machine Learning - Specialty",
  "Google Professional Data Engineer",
  "IBM Data Science Professional Certificate",
  "DeepLearning.AI TensorFlow Developer Certificate",
];

function App() {
  return (
    <div className="portfolio-app">
      <header className="hero" id="home">
        <div className="hero__container">
          <div className="hero__photo-wrap" aria-hidden="true">
            <img
              className="hero__photo"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
              alt="Portrait of Ayesha Rahman"
            />
          </div>
          <div className="hero__content">
            <p className="hero__eyebrow">Data Science Portfolio</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__meta">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="hero__stats">
              {profile.stats.map((item) => (
                <article className="stat-card" key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section" id="projects">
          <div className="section__heading">
            <p>Selected Work</p>
            <h3>Projects</h3>
          </div>
          <div className="card-grid">
            {projects.map((project) => (
              <article className="portfolio-card" key={project.title}>
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
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section__heading">
            <p>Career Journey</p>
            <h3>Experience</h3>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-item__head">
                  <h4>{item.role}</h4>
                  <span>{item.period}</span>
                </div>
                <h5>{item.company}</h5>
                <ul>
                  {item.achievements.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="section__heading">
            <p>Credentials</p>
            <h3>Certifications</h3>
          </div>
          <div className="cert-list">
            {certifications.map((cert) => (
              <article className="cert-item" key={cert}>
                <span className="cert-item__icon" aria-hidden="true">
                  ✓
                </span>
                <p>{cert}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Open to Data Scientist and AI Product opportunities.</p>
      </footer>
    </div>
  );
}

export default App;
