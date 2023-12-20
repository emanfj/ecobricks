import React, { useEffect } from 'react';
import './Story.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import AOS from 'aos';
import 'aos/dist/aos.css';

const Story = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="container-fluid story-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="row justify-content-center align-items-center">
        <div
          className="col-md-7 order-md-1 story-description"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>
            EcoBricks, founded by Kashaf Akhtar from Sarghoda, emerged from her journey in mechanical engineering at NUST. Fueled by a vision for sustainability, Kashaf transformed plastic waste into eco-friendly bricks to combat brick kiln pollution. With NUST's backing, her startup succeeded in Texilla, earning international acclaim and awards. EcoBricks epitomizes the triple bottom line—people, planet, profit—redefining construction by repurposing waste for a greener future. Explore Kashaf's innovative legacy on EcoBricks' website.
          </p>
        </div>
        <div
          className="col-md-4 order-md-2 story-image text-md-right"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <img src="/story-image.png" alt="Story" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Story;
