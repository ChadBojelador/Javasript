// pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import picturer from '../assets/picture2.jpg';
import Navigation from '../Components/Navigation';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="App">
      <div className="header-container">
        <Navigation />
        
        <div className="header-container2">
          <aside>
            <motion.img 
              className="picture" 
              src={picturer} 
              alt="Profile"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="description-pic"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 className="name" variants={itemVariants}>
                Chad Bojelador
              </motion.h1>
              <motion.p variants={itemVariants}>
                Software Developer & BSIT Graduate
              </motion.p>
            </motion.div>
          </aside>

          <section>
            <motion.div
              className="title-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h1 
                className="Title"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring' }}
              >
                ABOUT
              </motion.h1>
              
              <motion.div 
                className="p-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p variants={itemVariants}>
                  Passionate developer with expertise in modern web technologies.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div 
              className='boxes'
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className='box box-1'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3>Education</h3>
                <p>BS in Information Technology</p>
                <p>3.8 GPA</p>
              </motion.div>

              <motion.div 
                className='box box-3'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3>Experience</h3>
                <p>2+ Years Development</p>
                <p>Full Stack Projects</p>
              </motion.div>

              <motion.div 
                className='box box-4'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3>Skills</h3>
                <p>React, Node, Python</p>
                <p>Cloud & Databases</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="p-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>Let's create something amazing together!</p>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;