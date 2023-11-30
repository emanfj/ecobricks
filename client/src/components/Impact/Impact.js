import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faSmog, faTint } from '@fortawesome/free-solid-svg-icons';
import './Impact.css';

const Impact = () => {
  return (
    <section className="impact-container">
      <div className="impact-heading">
        <div className="impact-dot"></div>
        <div className="impact">our impact</div>
        <div className="impact-dot"></div>
      </div>
      <div className="impact-analytics">
        <div className="analytics-item">
          <span className="numeric-analytic">2 kg/sq ft</span>
          <hr className="impact-divider" />
          <div className="circle">
            <div className="circle-heading">plastic waste reduction</div> 
            <FontAwesomeIcon icon={faRecycle} className="circle-icon" />
          </div>
        </div>
        <div className="analytics-item">
          <span className="numeric-analytic">20%</span>
          <hr className="impact-divider" />
          <div className="circle">
            <div className="circle-heading">reduction in air pollution"</div>
            <FontAwesomeIcon icon={faSmog} className="circle-icon" />
          </div>
        </div>
        <div className="analytics-item">
          <span className="numeric-analytic">98%</span>
          <hr className="impact-divider" />
          <div className="circle">
            <div className="circle-heading">conservation of water</div> 
            <FontAwesomeIcon icon={faTint} className="circle-icon" />
          </div>
        </div>
        {/* <div className="analytics-item">
          <CountUp start={0} end={100} duration={2.5} className="count-up-figure" />
          <hr className="impact-divider"/>
          <div className="circle">
            <div className="circle-heading">landfills diverted</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Impact;