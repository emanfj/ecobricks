import React from 'react';
import CountUp from 'react-countup';
import './Impact.css';

const Impact = () => {
  return (
    <div className="impact-container">
      <div className="impact-heading">
        <div className="dot"></div>
        <div className="impact">our impact</div>
        <div className="dot"></div>
      </div>
      <div className="impact-analytics">
        <div className="analytics-item">
          <div className="circle">
            <div className="circle-heading">landfills diverted</div>
          </div>
          <hr className="impact-divider"/>
          <CountUp start={0} end={100} duration={2.5} className="count-up-figure" />
        </div>
        <div className="analytics-item">
          <div className="circle">
            <div className="circle-heading">pavers produced</div>
          </div>
          <hr className="impact-divider"/>
          <CountUp start={0} end={200} duration={2.5} className="count-up-figure" />
        </div>
        <div className="analytics-item">
          <div className="circle">
            <div className="circle-heading">carbon footprint reduced</div>
          </div>
          <hr className="impact-divider"/>
          <CountUp start={0} end={300} duration={2.5} className="count-up-figure" />
        </div>
        <div className="analytics-item">
          <div className="circle">
            <div className="circle-heading">plastic waste recycled</div>
          </div>
          <hr className="impact-divider"/>
          <CountUp start={0} end={400} duration={2.5} className="count-up-figure" />
        </div>
      </div>
    </div>
  );
};

export default Impact;