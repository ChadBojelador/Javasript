import homeIcon from './assets/home.svg';
import folderIcon from './assets/folder.svg'
import certificateIcon from './assets/certificates.svg'
import toolsIcon from './assets/tools.svg'
import aboutIcon from './assets/about.svg'

function App() {
  return(
  <div className='header-container'>
    
        <header>
          <nav>
            <ul className='list-container'>
              <li className='list'>
                   <img className="icon-Home" src={homeIcon} alt="Home icon" />
              </li>
               <li className='list'>
                   <img className="icon-Home" src={folderIcon} alt="Home icon" />
              </li>
               <li className='list'>
                   <img className="icon-Home" src={certificateIcon} alt="Home icon" />
              </li>
               <li className='list'>
                   <img className="icon-Home" src={toolsIcon} alt="Home icon" />
              </li>
               <li className='list'>
                   <img className="icon-Home" src={aboutIcon} alt="Home icon" />
              </li>
            </ul>
          </nav>
        </header>
    <div className='header-container'>
        <aside>
          <div className='picture-block'>

          </div>
        </aside>
        <section>

        </section>
    </div>
  </div>
  );
}

export default App
