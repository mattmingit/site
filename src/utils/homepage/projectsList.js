import {
  PROJECT_STATUS,
  PROJECT_CONTEXTS,
  PROJECT_CATEGORIES,
} from "../constants/categories";

const projects = [
  {
    id: 1,
    icon: "",
    image: "/images/bdi-rates-logo.png",
    title: "BDI Rates",
    description: "Banca D'Italia Exchange Rates API written in Rust.",
    year: "2025",
    href: "",
    category: PROJECT_CATEGORIES.PERSONAL,
    context: PROJECT_CONTEXTS.PERSONAL_LEARNING,
    technologies: ["Rust"],
    status: PROJECT_STATUS.COMPLETED,
    repository: "https://github.com/mattmingit/bdi_rates",
    demo: "",
  },
  {
    id: 2,
    icon: "",
    image: "/images/python-broker-logo.png",
    title: "Python Broker Sim",
    description: "Basic broker simulation written in Python.",
    year: "2024",
    href: "",
    category: PROJECT_CATEGORIES.ACADEMIC,
    context: PROJECT_CONTEXTS.COURSE_FINAL,
    technologies: ["Python", "Pandas", "Numpy", "Streamlit"],
    status: PROJECT_STATUS.COMPLETED,
    repository: "https://github.com/mattmingit/linuxshell_project",
  },
];

export default projects;

export const filterByCategory = (projects, category) => {
  return projects.filter((project) => project.category === category);
};

export const filterByStatus = (projects, status) => {
  return projects.filter((project) => project.status === status);
};

export const filterByContext = (projects, context) => {
  return projects.filter((project) => project.context === context);
};

export const filterByTechnology = (projects, technology) => {
  return projects.filter(
    (project) =>
      project.technologies && project.technologies.includes(technology),
  );
};

export const getUniqueTechnology = (projects) => {
  const allTech = projects.flatMap((project) => project.technologies || []);
  return [...new Set(allTech)];
};
