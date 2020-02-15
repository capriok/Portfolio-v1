import React, { useState, useEffect } from 'react'
import ThemeSwitch from "./themeswitch"
import { useStateValue } from '../state'
import _ from 'lodash'

export default function Navbar() {
  const [{ darkState }, dispatch] = useStateValue()

  const handleChange = () => {
    dispatch({ type: 'flip', darkState: !darkState })
    localStorage.setItem('theme', !darkState)
  }


  return (
    <div className='navbar'>
      <div className="title"><a href="/"><h1>CaprioDev</h1></a></div>
      <div className="buttons">
        <a href='#intro-section'><p>Introduction</p></a>
        <a href='#tech-section'><p>Knowledge</p></a>
        <a href='#projects-section'><p>Endeavors</p></a>
        <a href='/#'><p>Resume</p></a>
      </div>
      <ThemeSwitch
        onClick={handleChange}
        checked={darkState}
      />
    </div>
  )
}