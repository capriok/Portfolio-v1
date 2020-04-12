import React from 'react'
import { useStateValue } from '../../state'
import Slider from '../image-slides/image-slides'

export const ProjectDisplay = ({ item }) => {
  const [{ theTheme },] = useStateValue()
  return (
    <div className="lone-project-template">
      <h6 style={theTheme.whiteFont}>{item.title}</h6>
      <div className="slideshow poly" style={theTheme.poly}>
        <Slider heading="Project" slides={item.slides} />
      </div>
      <div className="body" style={theTheme.whiteFont}>
        <p>{item.snippet}</p>
        <p style={{ textIndent: '15px' }}>{item.p1}{item.p2}</p>
        <br></br>
        <p style={{ textIndent: '15px' }}>{item.p1}</p>
        <br></br>
      </div>
      <div className="tags">
        {item.tags.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div className="tags"><span><a href={item.link}>Source Code</a></span></div>
    </div >
  )
}
