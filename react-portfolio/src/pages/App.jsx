import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import picture from '../assets/picture.svg';
import CustomCursor from '../Components/CustomCursor';
import Navigation from '../Components/Navigation';

function App() {
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => document.body.style.cursor = 'default';
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <div className="header-container">
        <Navigation></Navigation>

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
      <div className='boxes'>
  <div className='box box-1'>
    <p>ReactJS</p>
  </div>
  <div className='box box-2'>
    <p>C++</p>
  </div>
  <div className='box box-3'>
    <p>Java</p>
  </div>
  <div className='box box-4'>
    <p>Python</p>
  </div>
  <div className='box box-5'>
    <p>Qt</p>
  </div>
  <div className='box box-6'>
    <p>MySQL</p>
  </div>
  <div className='box box-7'>
    <p>NodeJS</p>
  </div>
  <div className='box box-8'>
    <p>HTML</p>
  </div>
  <div className='box box-9'>
    <p>CSS</p>
  </div>
  <div className='box box-10'>
    <p>Javascript</p>
  </div>
  <div className='box box-11'>
    <p>Tailwind</p>
  </div>
</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;