import React, { useState } from 'react'
import { useStateValue } from '../../state'

import Carousel from '../carousel/carousel'
import FullView from '../carousel/full-view'

const ProjectDisplay = ({ modalOpen, item }) => {
  const [{ theTheme },] = useStateValue()
  const [viewState, setViewState] = useState({ open: false, img: '' })
  const handleViewClose = () => setViewState({ open: false, img: '' })
  const newTab = { target: "_blank", rel: "noopener noreferrer" }
  return (
    <div className="lone-project-route">
      {viewState.open && <FullView state={viewState} close={handleViewClose} />}
      <div className="lone-project-template" style={modalOpen ? {} : { width: '100vw' }}>
        <h6 style={theTheme.whiteFont}>{item.title}</h6>
        <div className="slideshow poly" style={theTheme.poly}>
          <Carousel slides={item.slides} state={viewState} setState={setViewState} />
        </div>
        <div className={modalOpen ? "body modal" : "body"} style={theTheme.whiteFont}>
          <div className="snip-cont">
            <p>{item.snippet}</p>
          </div>
          <p className="writing-title">The Process</p>
          <p className="indent para">{item.writing.process}</p>
          {item.writing.processSub && <p className="indent para">{item.writing.processSub}</p>}
          {item.writing.conclusion.length > 0 &&
            <><br /><p className="writing-title">Take Aways</p></>
          }
          {item.writing.conclusion.map((item, i) => (
            <li key={i} className="indent">{item}</li>
          ))}
          {item.stack.length > 0 &&
            <><br /><p className="writing-title">Tenchonology Stack</p></>
          }
          {item.stack.map((tech, i) => (
            <li className="indent" key={i}>{tech}</li>
          ))}
          {item.resources.length > 0 &&
            <><br /><p className="writing-title">Recourses</p></>
          }
          {item.resources.map((link, i) => (
            <li className="indent" key={i}>
              <a {...newTab} className="resource" style={theTheme.linkFont} href={link}>{link}</a>
            </li>
          ))}
          <br />
          <div className="tags">
            <span><a {...newTab} href={item.demo}>Demo App</a></span>
          </div>
          {item.demoAcc && <div className="tags"><span>{item.demoAcc}</span></div>}
          <div className="tags">
            <span><a {...newTab} href={item.link}>Source Code</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay