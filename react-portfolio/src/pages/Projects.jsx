// Projects.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Projects.css';
import CustomCursor from '../Components/CustomCursor';
import Navigation from '../Components/Navigation';


const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
    demoLink: "#",
    codeLink: "#",
    image: "project1.jpg"
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management system",
    tech: ["React", "Firebase", "Material UI", "WebSockets"],
    demoLink: "#",
    codeLink: "#",
    image: "project2.jpg"
  },
  {
    title: "Portfolio Website",
    description: "Responsive personal portfolio website",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    demoLink: "#",
    codeLink: "#",
    image: "project3.jpg"
  }
];

const Projects = () => {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => document.body.style.cursor = 'default';
  }, []);
  return (
    <div className="App">
      <CustomCursor />
      <div className="header-container">
        <Navigation />
    <section className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <article className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} className="demo-link">
                  Live Demo
                </a>
                <a href={project.codeLink} className="code-link">
                  View Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
          </div>
    </div>
  );
};

export default Projects;