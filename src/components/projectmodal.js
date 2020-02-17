import React from 'react';
import { useStateValue } from '../state'
import Slider from './slideshow/slideshow'


export default function ProjectModal({ openModal, modalContent }) {
  const [{ darkState },] = useStateValue()
  const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    }
  ]
  return (
    <>
      <div className="modal-clickout" onClick={() => openModal(false)} />
      <div className={darkState ? "project-modal project-modal-dark" : "project-modal"}>
        <h1>{modalContent.title}</h1>
        <div className="slideshow">
          <Slider heading="Project" slides={slideData} />
        </div>
        <body>
          <h1>{modalContent.snippet}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.autem
            ipsam voluptatum?  Dolorum eaque,earum rem autem numquam pariatur
            dolor sit amet consectetur adipisicing elit Omnis minus
            placeat adipisicing elit.eos.dolor sit amet consectetur adipisicing
          elit Error quaerat similique amet sed minima?</p>
          <br></br>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.autem
        ipsam voluptatum?  Dolorum eaque,earum rem autem numquam pariatur
        dolor sit amet consectetur adipisicing elit Omnis minus
        placeat adipisicing elit.eos.dolor sit amet consectetur adipisicing
          elit Error quaerat similique amet sed minima?</p>
          <br></br>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.autem
        ipsam voluptatum?  Dolorum eaque,earum rem autem numquam pariatur
        dolor sit amet consectetur adipisicing elit Omnis minus
        placeat adipisicing elit.eos.dolor sit amet consectetur adipisicing
          elit Error quaerat similique amet sed minima?</p>
        </body>
        <div className="tags">
          <span>#</span>
          {modalContent.tags.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </>
  );
}
