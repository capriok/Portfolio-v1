import React from 'react'
// import { useStateValue } from '.././state'
import './components.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-buttons">
        <a href='#intro-section'><div className="nav-link">Introduction</div></a>
        <a href='#tech-section'><div className="nav-link">Knowledge</div></a>
        <a href='#projects-section'><div className="nav-link">Endeavors</div></a>
        <a href='#intouch-section'><div className="nav-link">Get in Touch</div></a>
      </div>
    </div>
  )
}