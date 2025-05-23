import home from './assets/homeIcon.svg';
import folderIcon from './assets/folder.svg';
import certificateIcon from './assets/certificates.svg';
import toolsIcon from './assets/tools.svg';
import aboutIcon from './assets/about.svg';
import picture from './assets/picture.svg'
const navItems = [
  { icon: home, alt: "Home", class: "home" },
  { icon: folderIcon, alt: "Projects", class: "folder" },
  { icon: certificateIcon, alt: "Certificates", class: "certificate" },
  { icon: toolsIcon, alt: "Tools", class: "tools" },
  { icon: aboutIcon, alt: "About", class: "about" },
];

function App() {
  return (
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
          <img className="picture"src={picture}/>
            <div className='description-pic'>  
            <h1 className='name'>Chad Bojelador</h1>
            <p>A Software Developer as well as a Bachelor of Science in Information Technology.</p>
            </div>

        
        </aside>
        <section>
          <div className='title-container'>
            <h1 className='Title'>SOFTWARE</h1>
            <h1 className='Title' id='title1'>DEVELOPER</h1>
            <p>Passionate about building impactful software that blends functionality </p>
            <p>with exceptional user experience. I specialize in crafting digital </p>
              <p>products that people love to use.</p>
          </div>
        </section>
      </div>
    </div>

   
  );
}

export default App;
