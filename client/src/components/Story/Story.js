import React, { useState } from 'react';
import './Story.css';

const Story = () => {
  const [state, setState] = useState({
    name: '',
    isEditing: false,
  });

  return (
    <div className="story">
      <div className="title_textbox">
        <div className="dot1"></div>
        <div className="ourstory">Our Story</div>
        <div className="dot2"></div>
      </div>
      <div className="story_of_company">blas blas blas</div>
      <div className="ellipse"></div>
      <div className="ellipse4"></div>
      <div className="ellipse3"></div>
    </div>
  );
};

export default Story;
