// Projects.jsx
import { useEffect, useRef } from 'react';
import '../Styles/Projects.css';
import CustomCursor from '../Components/CustomCursor';
import Navigation from '../Components/Navigation';
import { motion, useTime, useTransform, useMotionValue } from 'framer-motion';
import { animate, hover } from "motion";
import { splitText } from "motion-plus";

// ScatterText Component
function ScatterText({ text }) {
  const containerRef = useRef(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const target = containerRef.current.querySelector(".text-target");
    if (!target) return;

    const { chars } = splitText(target);

    const handlePointerMove = (event) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000;
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (element) => {
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = Math.min(speed * 0.1, 30); // Limit max distance

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="scatter-text-container">
      <h2 className="text-target">{text}</h2>
    </div>
  );
}

// ParallaxBoxes Component
function ParallaxBoxes() {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 8000],
    [0, 360],
    { clamp: false }
  );

  const tinyBox = {
    width: 30,
    height: 30,
    backgroundColor: "rgba(244, 108, 56, 0.15)",
    borderRadius: 4,
    rotate: useTransform(() => rotate.get() * 2),
  };

  const smallBox = {
    width: 50,
    height: 50,
    backgroundColor: "rgba(74, 159, 255, 0.15)",
    borderRadius: 4,
    rotate: useTransform(() => rotate.get() * 1.5),
  };

  const box = {
    width: 70,
    height: 70,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 4,
    rotate,
  };

  const layer = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: 'none',
  };

  const boxContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 40,
  };

  return (
    <>
      <div style={{ ...layer, filter: "blur(8px)", opacity: 0.2 }}>
        <div style={{ ...boxContainer, width: 400, gap: 60 }}>
          {[...Array(16)].map((_, i) => (
            <motion.div key={`tiny-${i}`} style={tinyBox} />
          ))}
        </div>
      </div>
      <div style={{ ...layer, filter: "blur(4px)", opacity: 0.3 }}>
        <div style={{ ...boxContainer, width: 300 }}>
          {[...Array(6)].map((_, i) => (
            <motion.div key={`small-${i}`} style={smallBox} />
          ))}
        </div>
      </div>
      <div style={{ ...layer, opacity: 0.4 }}>
        <div style={boxContainer}>
          <motion.div style={box} />
          <motion.div style={box} />
        </div>
      </div>
    </>
  );
}

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.35)"
      }}
    >
      <div className="parallax-container">
        <ParallaxBoxes />
      </div>
      
      <div className="project-image-container">
        <motion.img 
          src={project.image} 
          alt={project.title}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="image-overlay" />
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
        
        <div className="project-footer">
          <div className="project-meta">
            <span className="project-date">2023</span>
            <span className="project-category">Web Development</span>
          </div>
          
          <div className="tech-stack">
            {project.tech.map((tech, techIndex) => (
              <motion.span 
                className="tech-tag" 
                key={techIndex}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)" 
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <div className="project-actions">
            <a href={project.demoLink} className="demo-link">
              Live Demo <span className="arrow">→</span>
            </a>
            <a href={project.codeLink} className="code-link">
              Source Code <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// Projects Component
const Projects = () => {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = 'default'; };
  }, []);

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

  return (
    <div className="App">
      <CustomCursor />
      <div className="header-container">
        <Navigation />
        <section className="projects-section">
          <div className="section-title-container">
            <ScatterText text="Featured Projects" />
          </div>
          
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;