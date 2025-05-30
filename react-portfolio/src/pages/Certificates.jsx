// routes/Certificates.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import '../Styles/Certificates.css';
const certificates = [
  {
    title: "Software & Development Design Thinking",
    issuer: "DICT Region 10",
    date: "April 2025",
    description: "Advanced concepts in software design and user-centric development approaches"
  },
  {
    title: "Mastering Programming & Data Analysis",
    issuer: "Batangas State University",
    date: "October 2024",
    description: "Power BI integration and LMS tools for data visualization"
  },
  {
    title: "HTML/CSS Certification",
    issuer: "Udemy",
    date: "September 2023",
    description: "From basic markup to advanced responsive design techniques",
    credential: "UC-3cc92b04-07ce-46c8-b9c1-a1ddd2553b0b"
  }
];

const Certificates = () => {
  return (
    <div className="certificates-page">
      <Navigation />
      
      <motion.div 
        className="certificates-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="page-title">Certifications</h1>
        
        <motion.div 
          className="certificates-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-content">
                <h3>{cert.title}</h3>
                <div className="issuer-date">
                  <span className="issuer">{cert.issuer}</span>
                  <span className="date">{cert.date}</span>
                </div>
                <p className="description">{cert.description}</p>
                {cert.credential && (
                  <div className="credential-id">
                    <span>Credential ID:</span>
                    <code>{cert.credential}</code>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Certificates;