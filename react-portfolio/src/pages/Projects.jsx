// Projects.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from '../Components/CustomCursor';
import Navigation from '../Components/Navigation';
import '../Styles/Projects.css';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const ctRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const tabsSectionRef = useRef(null);
  const introTextRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1) “PROJECT / PROFILE” IntersectionObserver remains unchanged
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textLeftRef.current.classList.add('animate-left');
            textRightRef.current.classList.add('animate-right');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctRef.current) observer.observe(ctRef.current);
    return () => {
      if (ctRef.current) observer.unobserve(ctRef.current);
    };
  }, []);

  // 2) “Which tab is active?” scroll listener remains unchanged
  useEffect(() => {
    const handleScroll = () => {
      if (!tabsSectionRef.current) return;
      const scrollY = window.scrollY;
      const sectionTop = tabsSectionRef.current.offsetTop;
      const inSection = scrollY - sectionTop;
      // 1.5× viewport height per tab
      const idx = Math.floor(inSection / (window.innerHeight * 1.5));
      setCurrentIndex(Math.min(2, Math.max(0, idx)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3) Fix Pinning Logic for GSAP ScrollTrigger
  useEffect(() => {
    // A) Pin the intro text until the bottom of .intro-wrapper passes viewport top
    if (introTextRef.current) {
      ScrollTrigger.create({
        trigger: '.intro-wrapper',
        start: 'top top',
        end: 'bottom top',
        pin: '.text-align-center',
        pinSpacing: false,
        markers: false,
      });
    }

    // B) Pin the tabs_left, but only after scrolling 5 vh past the top of the section
    if (tabsSectionRef.current) {
      const tabsLeftEl = tabsSectionRef.current.querySelector('.tabs_left');

      ScrollTrigger.create({
        trigger: tabsSectionRef.current,
        start: 'top 5vh',       // ← instead of "top top+=5vh"
        end: 'bottom bottom',    // stay pinned until the section’s bottom hits viewport bottom
        pin: tabsLeftEl,
        pinSpacing: false,
        markers: false,
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="project-container">
      <div className="sign">
        <div className="hero-section">
          <div className="hero-content">
            <p>Focused on</p>
            <div className="dropping-texts">
              <div>Growth</div>
              <div>Purpose</div>
              <div>Excellence</div>
              <div>IMPACT!</div>
            </div>
          </div>
        </div>
      </div>

      <div className="nav">
        <Navigation />
        <CustomCursor />
      </div>

      {/* PROJECT / PROFILE */}
      <div className="ct" ref={ctRef}>
        <div className="split-text-container">
          <span className="text-part left" ref={textLeftRef}>PROJECT</span>
          <span className="text-part right" ref={textRightRef}>PROFILE</span>
        </div>
      </div>

      {/* New Intro Section */}
      <div className="intro-wrapper">
        <div className="intro" style={{ zIndex: 1 }}>
          <div className="text-align-center" id="js-pin" ref={introTextRef}>
            <div className="max-width-small align-center">
              <div className="margin-bottom margin-small">
                <h2 className="heading-style-h3">
                  <span className="light-green-underline">INNOVATIVE SOLUTIONS AND MEASURABLE IMPACT</span>
                </h2>
              </div>
              <div className='des'>
              <p className="text-size-medium">
                I build scalable and user-centered applications designed to solve real-world problems. My projects span various domains, from system management tools to productivity and data-driven applications. I focus on delivering clean, efficient, and maintainable solutions that prioritize functionality and user experience. Every project is an opportunity to innovate, learn, and create meaningful impact through technology.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <section className="section_tabs" ref={tabsSectionRef}>
        <div className="padding-section-large">
          <div className="tabs_height">
            <div className="tabs_sticky-wrapper">
              <div className="tabs_container">
                <div className="tabs_component">
                  {/* Left Column (gets pinned) */}
                  <div className="tabs_left">
<div className="tabs_left-top">
  {/* Tab 1 */}
  <div className={`tabs_let-content ${currentIndex === 0 ? 'is-1' : ''}`}>
    <div className="tabs_let-content__title">
      <h2 className="text-color-gray100">
        Medical Record <span className="text-color-green">Management System</span> using C++ and QT Framework
      </h2>
      <div className="tabs_line" />
    </div>
    <div className="tabs_let-content__description">
      <p className="paragraph">
       The Medical Record Management System, developed using C++ with a graphical user interface, features a stacked widget design that allows smooth navigation between login, patient data entry, and record viewing sections. It combines a MySQL database for persistent data storage with a Binary Search Tree (BST) for efficient in-memory operations such as searching, insertion, and deletion of patient records.
      </p>
    </div>
  </div>

  {/* Tab 2 */}
  <div className={`tabs_let-content ${currentIndex === 1 ? 'is-1' : ''}`}>
    <div className="tabs_let-content__title">
      <h2 className="text-color-gray100">
        Smart Waste Bin with <span className="text-color-green">Plastic Shredder</span>
      </h2>
      <div className="tabs_line" />
    </div>
    <div className="tabs_let-content__description">
      <div className="text-size-small text-color-gray400">
        <p>
          A Research Project Presented to <br />
          The Faculty of Southern Luzon State University Laboratory School
        </p>
        <br/>
        <p className="paragraph">
         This project presents a Smart Waste Bin with an integrated plastic shredder that automatically detects and shreds plastic for efficient waste management and sustainability. Powered by Arduino Uno R3 components, the system automates shredding and logs data in real-time via Google Sheets using Google Apps Script, promoting responsible disposal through smart technology.


        </p>
      </div>
    </div>
  </div>

  {/* Tab 3 */}
  <div className={`tabs_let-content ${currentIndex === 2 ? 'is-1' : ''}`}>
    <div className="tabs_let-content__title">
      <h2 className="text-color-gray100">
        Sustainable solutions, <span className="text-color-green">built to last</span>
      </h2>
      <div className="tabs_line" />
    </div>
    <div className="tabs_let-content__description">
      <p className="text-size-small text-color-gray400">
        We craft solutions with maintainability and future growth in mind.
      </p>
    </div>
  </div>
</div>
                    <div className="tabs_left-bottom">
                      <div className="button is-green is-secondary">
                        <div className="button-text">View projects</div>
                        <div className="button-circle-wrapper">
                          <div className="button-icon _1">
                            <svg height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M4.66699 11.3332L11.3337 4.6665"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.66699 4.6665H11.3337V11.3332"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="button-icon _2">
                            <svg height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M4.66699 11.3332L11.3337 4.6665"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M4.66699 4.6665H11.3337V11.3332"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="button-circlee background-color-green" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column (just fades videos in/out) */}
                  <div className="tabs_right">
                    <div className={`tabs_video ${currentIndex === 0 ? 'is-1' : ''}`}>
                      <div
                        className="video-placeholder"
                        style={{ background: 'linear-gradient(135deg,rgb(232, 232, 232) 0%,rgb(0, 126, 135) 100%)' }}
                      >
                        <div className="placeholder-text">Design Showcase</div>
                      </div>
                      <img
                        src="https://via.placeholder.com/100"
                        loading="lazy"
                        alt="Award badge"
                        className="tabs_video-gda-badge"
                      />
                    </div>
                    <div className={`tabs_video ${currentIndex === 1 ? 'is-1' : ''}`}>
                      <div
                        className="video-placeholder"
                        style={{ background: 'linear-gradient(135deg,rgb(232, 232, 232) 0%,rgb(0, 126, 135) 100%)' }}
                      >
                        <div className="placeholder-text">Tech Stack</div>
                      </div>
                    </div>
                    <div className={`tabs_video ${currentIndex === 2 ? 'is-1' : ''}`}>
                      <div
                        className="video-placeholder"
                        style={{ background: 'linear-gradient(135deg, rgb(232, 232, 232) 0%,rgb(0, 126, 135) 100%)' }}
                      >
                        <div className="placeholder-text">Architecture</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '50vh' }} />
    </div>
  );
}

export default Projects;
