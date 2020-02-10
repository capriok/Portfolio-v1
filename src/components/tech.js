import React from 'react';
import logocollage from '../img/logo-collage.png'

export default function TechSection() {
  return (
    <>
      <div id='tech-section' className="tech-section">
        <div className="tech-one">
          <div className="tech-card">
            <h1>Languages</h1>
            <p>Javascript, JSX, HTML5, CSS3, Sass</p>
            <h1>Frameworks</h1>
            <p>Node, React, Redux, Express</p>
            <h1>Storage</h1>
            <p>MongoDB, GraphQL, AWS</p>
            <h1>Tools</h1>
            <p>Git, Lodash, Webpack, Babel, Regex</p>
          </div>
        </div>
        <div className="tech-border"></div>
        <div className="tech-two">
          <div className="tech-area">
            <img src={logocollage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
