import React from 'react'
import { useStateValue } from '../../state'
import Slider from '../image-slides/image-slides'

export const ProjectDisplay = ({ modalOpen, item }) => {
  const [{ theTheme },] = useStateValue()
  return (
    <div className="lone-project-template" style={modalOpen ? {} : { width: '100vw' }}>
      <h6 style={theTheme.whiteFont}>{item.title}</h6>
      <div className="slideshow poly" style={theTheme.poly}>
        <Slider heading="Project" slides={item.slides} />
      </div>
      <div className={modalOpen ? "body modal" : "body"} style={theTheme.whiteFont}>
        <p>{item.snippet}</p>
        <p style={{ fontWeight: 600, padding: '10px 0' }}>Objective</p>
        <p style={{ textIndent: '15px' }}>{item.writing.objective}</p>

        {item.writing.conclusion.length > 0 &&
          <>
            <br /><p style={{ fontWeight: 600, padding: '10px 0' }}>Take Away</p>
          </>
        }
        {item.writing.conclusion.map((item, i) => (
          <li key={i} style={{ textIndent: '15px' }}>{item}</li>
        ))}
        <br />
        <div className="tags"><span><a href={item.demo}>Demo App</a></span></div>
        <div className="tags"><span><a href={item.link}>Source Code</a></span></div>
        <div className="tags">
          {item.tags.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div >
  )
}
