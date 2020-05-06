import React, { useState, useEffect } from 'react';
import { useStateValue } from '../state'
import Slider from './slideshow/slideshow'
import close from '../img/close.png'
import useLockBodyScroll from './hooks/uselockbodyscroll';


export default function ProjectModal({ openModal, modalContent }) {
  const [{ darkState },] = useStateValue()
  useLockBodyScroll()

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
        <div className="body poly">
          <p>{modalContent.snippet}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.autem
            ipsam voluptatum? Dolorum eaque,earum rem autem numquam pariatur
            dolor sit amet consectetur minus adipisicing elit Omnis
            placeat adipisicing elit.dolor sit amet consectetur adipisicing
          elit Error quaerat similique amet sed minima?</p>
          <br></br>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.autem
        ipsam voluptatum?  Dolorum eaque,earum rem autem numquam pariatur
        dolor sit amet consectetur adipisicing elit Omnis minusadipisicing
        placeat dolor adipisicing elit Omnis minusconsecteturadipisicing
        placeat adipisicing elit.eos.dolor sit amet consectetur adipisicing
          elit Error quaerat similique amet sed minima?</p>
          <br></br>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.autem
        ipsam voluptatum?  Dolorum eaque,earum rem autem numquam pariatur
        dolor sit amet consectetur adipisicing elit Omnis minus
        placeat adipisicing elit.eos.dolor sit amet consectetur adipisicing
          elit Error quaerat similique amet sed minima?</p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.autem
        placeat adipisicing elit.eos.dolor sit amet consectetur adipisicing
          elit Error quaerat similique amet sed minima?</p>
        </div>
        <div className="tags">
          <span style={{ color: 'white' }}>#</span>
          {modalContent.tags.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
        <div className="mobile-close"><img src={close} alt="" onClick={() => openModal(false)} /></div>
      </div>
    </>
  );
}
