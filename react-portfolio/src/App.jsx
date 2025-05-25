import { useState, useEffect, useRef } from 'react';
import home from './assets/homeIcon.svg';
import folderIcon from './assets/folder.svg';
import certificateIcon from './assets/certificates.svg';
import toolsIcon from './assets/tools.svg';
import aboutIcon from './assets/about.svg';
import picture from './assets/picture.svg';
import CustomCursor from './CustomCursor';
const navItems = [
  { icon: home, alt: "Home", class: "home" },
  { icon: folderIcon, alt: "Projects", class: "folder" },
  { icon: certificateIcon, alt: "Certificates", class: "certificate" },
  { icon: toolsIcon, alt: "Tools", class: "tools" },
  { icon: aboutIcon, alt: "About", class: "about" },
];

function App() {
    useEffect(() => {
    document.body.style.cursor = 'none';
    return () => document.body.style.cursor = 'default';
  }, []);


  return (
    <div className="App">
      <CustomCursor />
    <div className="header-container">
      <header>
        <nav>
          <ul className="list-container">
            {navItems.map((item, index) => (
              <li className="list" key={index}>
                <img
                  className={`icon icon-${item.class}`}
                  src={item.icon}
                  alt={item.alt}
                />
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="header-container2">
        <aside>
          <img className="picture" src={picture} alt="Profile" />
          <div className='description-pic'>  
            <h1 className='name'>Chad Bojelador</h1>
            <p>A Software Developer as well as a Bachelor of Science in Information Technology.</p>
          </div>
        </aside>

        <section>
          <div className='title-container'>
            <h1 className='Title'>SOFTWARE</h1>
            <h1 className='Title' id='title1'>DEVELOPER</h1>
            <div className='p-container'>
              <p>Focused on building software that drives impact</p>
              <p>with intuitive design and seamless functionality.</p>
            </div>
          </div>

          {/* Add content-sections container */}
          <div className="content-sections">
            <div id="techstack" className="content-part">
              <h2>Tech Stack</h2>
            </div>
            
            <div id="projects" className="content-part">
              <h2>Projects</h2>
            </div>

            <div id="experience" className="content-part">
              <h2>Experience</h2>
            </div>

            <div id="certificates-seminars" className="content-part">
              <h2>Certificates & Seminars</h2>
            </div>

            <div id="contacts" className="content-part">
              <h2>Contacts</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}

export default App;