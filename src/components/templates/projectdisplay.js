import React from 'react'
import { useStateValue } from '../../state'
import Slider from '../image-slides/image-slides'
import useLockBodyScroll from '../hooks/uselockbodyscroll'

export const ProjectDisplay = ({ modalOpen, item }) => {
  const [{ theTheme },] = useStateValue()
  return (
    <>

      <div className="lone-project-template" style={modalOpen ? {} : { width: '100vw' }}>
        <h6 style={theTheme.whiteFont}>{item.title}</h6>
        <div className="slideshow poly" style={theTheme.poly}>
          <Slider heading="Project" slides={item.slides} />
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
            <li className="indent">
              <a className="resource" key={i}
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
