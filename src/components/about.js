import React from 'react';
import { useStateValue } from '../state'
import about from '../gallery/about.svg'

export default function AboutRoute() {
  const [{ theTheme },] = useStateValue()
  return (
    <>
      <div className="about-route">
        <div className="about-template">
          <div className="banner poly">
            <img src={about} alt="" />
          </div>
          <div className="body" style={theTheme.whiteFont}>
            <h1>—— About Me ——</h1>
            <p className="indent">
              My name is Kyle Caprio. I'm a self taught software engineer based in Tempe, Arizona.
              I found my passion for learning computer sciences at the age of 16 and have been programming ever since.
              Despite not attending college, I've dedicated countless hours to learning and expanding my passion.
              Being able to effectively teach myself is something I am most proud of about myself.
              I have developed an avid work ethic and disciplinary skills along my journey in life.
              Strong creative and critical thinking skills have helped me to excel in areas
              like web development as well as functional and object oriented programming.
              In free my time, I immerse myself in learning new programming technologies and how to better myself as a programmer
              but also find joy with meditaion, music, hiking, and spending time under the sun.
            </p>
            <h1>—— Technical Skills ——</h1>
            <ul>
              <li><p>HTML, CSS, SASS,  (Front End Development)</p></li>
              <li><p>React.js, Node.js, Express (Javascript)</p></li>
              <li><p>Relational databases: GraphQl, SQL</p></li>
              <li><p>Non-Relational databases: MongoDB</p></li>
              <li><p>Library use: Gatsby, NEXT.js, Material-UI</p></li>
            </ul>
            <h1>—— Proffesional Experience ——</h1>
            <ul>
              <li><p>Freelance website design and deployment projects for 2 small business clients</p></li>
              <li><p>&lt; 1 year consulting on an open source user authentication application</p></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
