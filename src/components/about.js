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
            <p style={{ textIndent: '15px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. autem
              ipsam voluptatum? Dolorum eaque,earum rem autem numquam pariatur
              dolor sit amet consectetur adipisicing elit Omnis
              placeat adipisicing elit. Dolor sit amet consectetur adipisicing
              elit Error quaerat similique amet sed minima?
            </p>
            <br></br>
            <p style={{ textIndent: '15px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. autem
              ipsam voluptatum?  Dolorum rem autem numquam pariatur
              dolor sit amet consectetur adipisicing elit Omnis minusadipisicing
              placeat dolor adipisicing elit Omnis minusconsecteturadipisicing
              placeat adipisicing elit. dolor sit amet consectetur adipisicing
              elit Error quaerat similique amet sed minima?
            </p>
            <br></br>
            <p style={{ textIndent: '15px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. autem
              ipsam. Dolor sit amet consectetur adipisicing
              elit Error quaerat similique amet sed minima?
            </p>
            <h1>—— Technical Skills ——</h1>
            <ul>
              <li><p>Lorem alida sit amet consectetur adipisicing elit.</p></li>
              <li><p>Lorem dolor amet consectetur ipsu madipisicing elit. Sit adipisicing elit.</p></li>
              <li><p>Lorem ipsum dolor sit amet consectetur elit.</p></li>
              <li><p>Lorem amet consectetur adipisicing elit.</p></li>
            </ul>
            <h1>—— Experience ——</h1>
            <ul>
              <li><p>Lorem ipsum dolor sit amet consectetur elit.</p></li>
              <li><p>Lorem ahula sit amet elit.</p></li>
              <li><p>Lorem alida sit consectetur amet adipisicing elit.</p></li>
              <li><p>Lorem dolor amet elit. Lorem ipsum consectetur adipisicing dolor sit adipisicing elit.</p></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
