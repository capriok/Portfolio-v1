import React, { useState, useRef } from 'react'
import arrow from '../../gallery/arrow-right.png'
import './image-slides.scss'

function Slide({ slide, index, current, handleSlideClick }) {
  const slideRef = useRef()

  const handleMouseMove = (event) => {
    const el = slideRef.current
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  }
  const handleMouseLeave = (event) => {
    slideRef.current.style.setProperty('--x', 0)
    slideRef.current.style.setProperty('--y', 0)
  }
  const slideClick = (event) => {
    handleSlideClick(index)
  }
  const imageLoaded = (event) => {
    event.target.style.opacity = 1
  }

  let classNames = 'slide'

  if (current === index) classNames += ' slide--current'
  else if (current - 1 === index) classNames += ' slide--previous'
  else if (current + 1 === index) classNames += ' slide--next'

  return (
    <>
      <li
        ref={slideRef}
        className={classNames}
        onClick={slideClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            src={slide}
            alt=''
            onLoad={imageLoaded}
          />
        </div>
      </li>
    </>
  )
}


export const SliderControl = ({ type, title, handleClick }) => {
  return (
    <>
      <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
        <img src={arrow} className='icon' alt="" />
      </button>
    </>
  )
}


export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0)

  const wrapperTransform = { 'transform': `translateX(-${current * (100 / slides.length)}%)` }

  const handlePreviousClick = () => {
    const previous = current - 1
    previous < 0 ? setCurrent(slides.length - 1) : setCurrent(previous)
  }
  const handleNextClick = () => {
    const next = current + 1;
    slides.length === next ? setCurrent(0) : setCurrent(next)
  }
  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index)
    }
  }

  return (
    <>
      <div className='slider' >
        <ul className="slider__wrapper" style={wrapperTransform}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
        <div className="slider__controls">
          <SliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />
          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>
    </>
  )
}
