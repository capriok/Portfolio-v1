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
            <h1>— About Me —</h1>
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
            <h1>— Skills —</h1>
            <ul>
              <li><span className="type">Programming Languages:</span><span> JavaScript, HTML5, SASS, CSS</span></li>
              <li><span className="type">Fron-End Technologies:</span><span> React.js, Material-UI, Styled-Components, Formik</span></li>
              <li><span className="type">Back-End Frameworks:</span><span> Express, Koa.js, Socket.io</span></li>
              {/* <li><span className="type">Runtimes:</span><span> Node.js, Deno.js</span></li> */}
              <li><span className="type">Relational databases:</span><span> SQL(Postgres), GraphQL</span></li>
              <li><span className="type">Non-Relational databases:</span><span> MongoDB, NoSQL</span></li>
              <li><span className="type">Cloud Platforms:</span><span> AWS, Netlify, Heroku</span></li>
              <li><span className="type">Library use:</span><span> Gatsby, Next.js, Axios, Lodash, Formik</span></li>
              <li><span className="type">UI Development:</span><span> Figma, Adobe XD</span></li>
              <li><span className="type">Tools:</span><span> Git, NPM, Webpack, Babel, JWT, CORS, Serverless-http, Postman/Insomnia</span></li>
            </ul>
            <h1>— Proffesional Experience —</h1>
            <ul>
              <li><span>Freelance website design and deployment projects for 2 small business clients</span></li>
              <li><span>&lt; 1 year consulting on an open source user authentication application</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}