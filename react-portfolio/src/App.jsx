import { useState, useEffect, useRef } from 'react';
import home from './assets/homeIcon.svg';
import folderIcon from './assets/folder.svg';
import certificateIcon from './assets/certificates.svg';
import toolsIcon from './assets/tools.svg';
import aboutIcon from './assets/about.svg';
import picture from './assets/picture.svg';
import CustomCursor from './CustomCursor';

const navItems = [
  { icon: home, alt: "Home", className: "home" },
  { icon: folderIcon, alt: "Projects", className: "folder" },
  { icon: certificateIcon, alt: "Certificates", className: "certificate" },
  { icon: toolsIcon, alt: "Tools", className: "tools" },
  { icon: aboutIcon, alt: "About", className: "about" },
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
                    className={`icon icon-${item.className}`}
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
            <div className="description-pic">  
              <h1 className="name">Chad Bojelador</h1>
              <p>A Software Developer as well as a Bachelor of Science in Information Technology.</p>
            </div>
          </aside>

          <section>
            <div className="title-container">
              <h1 className="Title">SOFTWARE</h1>
              <h1 className="Title" id="title1">DEVELOPER</h1>
              <div className="p-container">
                <p>Focused on building software that drives impact</p>
                <p>with intuitive design and seamless functionality.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;