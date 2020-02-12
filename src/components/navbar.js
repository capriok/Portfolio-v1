import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="title"><a href="/"><h1>Kyle Caprio</h1></a></div>
      <div className="buttons">
        <a href='#intro-section'><p>Introduction</p></a>
        <a href='#tech-section'><p>Knowledge</p></a>
        <a href='#projects-section'><p>Endeavors</p></a>
        <a href='/#'><p>Resume</p></a>
      </div>
    </div>
  )
}