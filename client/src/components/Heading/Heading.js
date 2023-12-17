import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Heading.css'; // Create a CSS file for your component styles

const Heading = ({ title, detail }) => {
  return (
    <header className="header-container">
      <h2 className="title">{title}</h2>
      <p className="detail">{detail}</p>
    </header>
  );
};

export default Heading;
