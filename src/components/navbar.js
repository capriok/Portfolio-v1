import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useStateValue } from '../state'
import ThemeSwitch from "./themeswitch"
import NavDrop from './navdrop';

export default function Navbar() {
  const [navDrop, setDrop] = useState(false)
  const [{ darkState }, dispatch] = useStateValue()

  const handleChange = () => {
    dispatch({ type: 'flip', darkState: !darkState })
    localStorage.setItem('theme', !darkState)
  }

  return (
    <>
      <div className="navbar">
        <a href="/"><h1>Kyle Caprio</h1></a>
        <div className="buttons">
          <Link to='/about'><p>Introduction</p></Link>
          <Link to='/projects'><p>Projects</p></Link>
          <Link to='#'><p>Resume</p></Link>
        </div>
        <ThemeSwitch onClick={handleChange} checked={darkState} />
        <div className="hamburger" onClick={() => setDrop(!navDrop)}><p>☰</p></div>
      </div>
      {navDrop && <>
        <NavDrop navDrop={navDrop} setDrop={setDrop} />
      </>}
    </>
  )
}