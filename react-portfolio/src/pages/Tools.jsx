// pages/Tools.jsx
import { useEffect } from 'react';
import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@12.15.0/+esm";
import Navigation from '../Components/Navigation';
import '../Styles/tools.css'
const Tools = () => {
  const tools = [

    {
      category: "Programming Languages",
      items: ["JavaScript (ES6+)", "Python", "Java", "C#", "PHP"]
    },
    {
      category: "Frontend Development",
      items: ["React", "HTML5", "CSS3/Sass", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "MySQL", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git/GitHub", "VS Code", "Postman", "Figma", "Netlify", "Vercel"]
    }
  ];

  useEffect(() => {
    inView(".scroll-section", (element) => {
      animate(
        element.querySelector(".animate-block"),
        { opacity: 1, y: [100, 0] },
        {
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );
      return () => animate(element.querySelector(".animate-block"), { opacity: 0, y: 100 });
    });
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <Navigation />
        
        <div className="example">
          <section className="scroll-section">
            <div className="title-container">
              <h1 className="text-head text-gradient animate-block">TECHSTACK</h1>
            </div>
          </section>

          {/* Tool Categories */}
          {tools.map((toolGroup, index) => (
            <section key={index} className="scroll-section">
              <div className="animate-block">
                <h2 className="category-title text-gradient">{toolGroup.category}</h2>
                <div className="tools-grid">
                  {toolGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="tool-card">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;