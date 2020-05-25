import React, { useState } from 'react'
import { useStateValue } from '../../state'
import Carousel from '../carousel/carousel'
import FullView from '../carousel/full-view'

export const ProjectDisplay = ({ modalOpen, item }) => {
  const [{ theTheme },] = useStateValue()
  const [viewState, setViewState] = useState({ open: false, img: '' })
  const handleViewClose = () => setViewState({ open: false, img: '' })

  return (
    <>
      {viewState.open && <FullView state={viewState} close={handleViewClose} />}
      <div className="lone-project-template" style={modalOpen ? {} : { width: '100vw' }}>
        <h6 style={theTheme.whiteFont}>{item.title}</h6>
        <div className="slideshow poly" style={theTheme.poly}>
          <Carousel slides={item.slides} state={viewState} setState={setViewState} />
        </div>
        <div className={modalOpen ? "body modal" : "body"} style={theTheme.whiteFont}>
          <p>{item.snippet}</p>
          <p className="writing-title">The Process</p>
          <p className="indent">{item.writing.process}</p>
          {item.writing.conclusion.length > 0 &&
            <>
              <br /><p className="writing-title">Take Aways</p>
            </>
          }
          {item.writing.conclusion.map((item, i) => (
            <li key={i} className="indent">{item}</li>
          ))}
          <br />
          {item.resources.length > 0 &&
            <>
              <br /><p className="writing-title">Recourses</p>
            </>
          }
          {item.resources.map((link, i) => (
            <li className="indent" key={i}>
              <a className="resource"
                style={theTheme.linkFont}
                href={link}
                target="_blank"
                rel="noopener noreferrer">{link}</a>
            </li>
          ))}
          <br />
          <div className="tags"><span><a href={item.demo}>Demo App</a></span></div>
          {item.demoAcc && <div className="tags"><span>{item.demoAcc}</span></div>}
          <div className="tags"><span><a href={item.link}>Source Code</a></span></div>
          <div className="tags">
            {item.tags.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div >

    </>
  )
}
