import React, { useState, useEffect, useRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import FullView from './full-view'

import arrowPrev from '../../gallery/arrow-prev.png'
import arrowNext from '../../gallery/arrow-next.png'

const Carousel = ({ slides, state, setState, handleClose }) => {
  let ref = useRef()
  const [items, setItems] = useState([])

  const isMobile = window.innerWidth < 500
  const handleOnDragStart = (e) => e.preventDefault()
  let determine = window.location.pathname === '/' ? 2 : 3
  const responsive = { 0: { items: 1 }, 600: { items: 2 }, 1024: { items: determine } };

  const createMap = (images) => {
    const map = images.map((src, i) => (
      <div className="img-cont" key={i}>
        <img src={src} alt="" className="carousel-img"
          onDragStart={handleOnDragStart}
          onClick={() => !isMobile && setState({ open: true, img: src })} />
      </div>
    ))
    return map
  }



  useEffect(() => {
    setItems(createMap(slides))
  }, [])

  return (
    <>
      {state.open && <FullView state={state} close={handleClose} />}
      <div className="gallery-cont">
        <img src={arrowPrev} alt=""
          className="slide-btn"
          onClick={() => ref.slidePrev()} />
        <AliceCarousel
          className="alice-carousel"
          ref={(el) => (ref = el)}
          mouseTrackingEnabled={isMobile ? true : false}
          responsive={responsive}
          dotsDisabled={true}
          buttonsDisabled={true}
          items={items}
          startIndex={0}
        >
        </AliceCarousel>
        <img src={arrowNext} alt=""
          className="slide-btn"
          onClick={() => ref.slideNext()} />
      </div>
    </>
  )
}

export default Carousel