export const profileData = {
  eyebrow: "Data Scientist Portfolio",
  name: "Muhammad Ameen",
  title: "Data Scientist | Computer Vision and Deep Learning",
  location: "Pakistan",
  email: "junejoameen44@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/replace-with-your-link/",
  imageAlt: "",
  summary:
    "I design practical AI solutions for education, vision systems, and enterprise automation.",
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Core Area", value: "Computer Vision" },
    { label: "Focus", value: "Applied AI" },
  ],
};

export const projectsSectionData = {
  eyebrow: "Selected Projects",
  title: "",
  cardActionLabel: "Open README",
  readmeModal: {
    modalTitleSuffix: "README",
    closeButtonText: "Close",
    loadingText: "Loading README...",
    errorText: "README not available. Please try again.",
  },
};

export const projectsData = [
  {
    id: "fyp-omr",
    title: "AI enabled E assessment of close ended questions on OMR sheet",
    tag: "FYP Project",
    description:
      "Final year project for automated evaluation of close-ended OMR responses using computer vision and AI-driven scoring logic.",
    impact: "Reduced manual checking time and improved consistency in assessment.",
    stack: ["Python", "OpenCV", "Machine Learning", "Flask"],
    readmePath: "/readmes/ai-enabled-omr-assessment.md",
  },
  {
    id: "vehicle-yolo",
    title: "Vehicle Recognition System Using YOLO",
    tag: "Deep Learning",
    description:
      "Object detection pipeline for vehicle recognition built with YOLO and trained on a Kaggle dataset.",
    impact: "Accurate real-time vehicle detection for surveillance and traffic use cases.",
    stack: ["Python", "YOLO", "PyTorch", "Kaggle Dataset"],
    readmePath: "/readmes/vehicle-recognition-yolo.md",
  },
  {
    id: "auto-attendance",
    title: "Auto Attendance System Image Recognition",
    tag: "Siamese Network",
    description:
      "Attendance automation using face matching with a Siamese neural network for identity verification.",
    impact: "Improved attendance reliability while reducing manual errors.",
    stack: ["Python", "TensorFlow", "Siamese Network", "OpenCV"],
    readmePath: "/readmes/auto-attendance-siamese.md",
  },
  {
    id: "payroll",
    title: "Payroll Management System",
    tag: "Software Project",
    description:
      "Management system for employee payroll, salary records, and monthly processing workflows.",
    impact: "Simplified payroll operations and improved reporting accuracy.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    readmePath: "/readmes/payroll-management-system.md",
  },
];

export const contactData = {
  heading: "Get in Touch",
  description:
    "Have a project in mind or just want to say hi? I am always open to discussing new projects and opportunities.",
  connectHeading: "Connect With Me",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/replace-with-your-link/",
      isExternal: true,
    },
    {
      label: "Email",
      href: "mailto:junejoameen44@gmail.com",
      isExternal: false,
    },
    {
      label:"Github",
      href:"https://github.com/MuhammadAmeen321",
      isExternal:true
    }
  ],
  form: {
    topRowFields: [
      { name: "name", label: "Name", type: "text", placeholder: "John Doe" },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "john@example.com",
      },
    ],
    mainFields: [
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "Project Inquiry",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        rows: 5,
        placeholder: "Tell me about your project...",
      },
    ],
    submitText: "Send Message",
  },
};

export const footerData = {
  emailLabel: "Email",
  linkedinLabel: "LinkedIn",
  linkedinLinkText: "Profile Link",
  copyrightPrefix: "(c)",
  rightsText: "All rights reserved.",
};
