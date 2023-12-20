import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap'; // Import Bootstrap Modal component
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CompanyProjects.css';

const CompanyProjects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showZoomedImage, setShowZoomedImage] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState('');

  const projectData = [
    {
      title: 'Industrial',
      image: '/project1.jpg',
      projectLink: '/',
    },
    {
      title: 'Housing',
      image: '/project1.jpg',
      projectLink: '/',
    },
    {
      title: 'Paving',
      image: '/project1.jpg',
      projectLink: '/',
    },
    // ... (other project data)
  ];

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const handleLinkClick = (projectLink) => {
    window.location.href = projectLink;
  };

  const handleZoomInClick = (imageSrc) => {
    setZoomedImageSrc(imageSrc);
    setShowZoomedImage(true);
  };

  const handleCloseZoomedImage = () => {
    setShowZoomedImage(false);
  };

  return (
    <section
      className="projects-container">
      <div className="container pt-4">
        <div className="row">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`col-md-4 mb-4 project-col ${
                hoveredIndex === index ? 'hovered' : ''
              }`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              {/* Front of the card (image) */}
              <div className="card project-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                    >
                <div className="card-img-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                  />
                </div>
                {/* Overlay for hover effect */}
                <div className="overlay">
                  <div className="card-title">{project.title}</div>
                  <div className="icon-container mt-4">
                    <span
                      className="icon"
                      onClick={() => handleLinkClick(project.projectLink)}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </span>
                    <span
                      className="icon"
                      onClick={() => handleZoomInClick(project.image)}
                    >
                      <FontAwesomeIcon icon={faSearchPlus} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bootstrap Modal for Zoomed Image */}
        <Modal show={showZoomedImage} onHide={handleCloseZoomedImage}>
          <Modal.Body>
            <img src={zoomedImageSrc} alt="" className="img-fluid" />
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default CompanyProjects;