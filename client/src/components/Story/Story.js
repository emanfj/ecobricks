// Story.js
import React from 'react';
import './Story.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Story = () => {
  return (
    <section className="container-fluid story-container">
      <div className="row">
        <div className="col-12 text-center story-heading">
          <div className="story-dot"></div>
          <div className="story-heading">story</div>
          <div className="story-dot"></div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 order-md-1 story-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla id justo convallis fringilla. Vestibulum dapibus dolor sit amet dui efficitur tincidunt. Proin vel quam vitae elit aliquet dignissim. Phasellus commodo, libero in tincidunt auctor, lacus justo convallis mi, non fermentum dolor metus nec massa. Fusce non dolor ut ante dapibus laoreet. Quisque vel accumsan augue, vel euismod nisl. Nullam fermentum nec orci sit amet suscipit. In hac habitasse platea dictumst. Suspendisse potenti. Sed ut felis eget purus tincidunt scelerisque in non est. Vivamus semper diam vitae libero fermentum, at blandit sem semper. Nullam sodales lectus in tortor vestibulum, vel fermentum tortor dapibus. Integer quis ante eu purus bibendum dapibus. Phasellus scelerisque risus vel diam malesuada fermentum.
          </p>
        </div>
        <div className="col-md-6 order-md-2 story-image text-md-right">
          <img src="/story-image.png" alt="Story" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Story;
