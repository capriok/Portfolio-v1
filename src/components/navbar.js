import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useStateValue } from '../state'
import ThemeSwitch from "./themeswitch"
import NavDrop from './navdrop';

export default function Navbar({ openModal, handleInquiryOpen, handleInquiryClose }) {
  const [navDrop, setDrop] = useState(false)
  const [{ darkState }, dispatch] = useStateValue()

  const handleChange = () => {
    dispatch({ type: 'flip', darkState: !darkState })
    localStorage.setItem('theme', !darkState)
  }

  const closeOpenModals = () => {
    openModal(false)
    handleInquiryClose()
  }

  return (
    <>
      <div className="navbar">
        <a href="/"><h1>Kyle Caprio</h1></a>
        <div className="buttons">
          <Link to='/about' onClick={() => closeOpenModals()}><p>About Me</p></Link>
          <Link to='/projects' onClick={() => closeOpenModals()}><p>Projects</p></Link>
          <Link onClick={() => { openModal(false); handleInquiryOpen() }}><p>Contact</p></Link>
          <Link to="resume" onClick={() => closeOpenModals()}><p>Resume</p></Link>
        </div>
        <ThemeSwitch onClick={handleChange} checked={darkState} />
        <div className="hamburger" onClick={() => setDrop(!navDrop)}><p>☰</p></div>
      </div>
      {navDrop && <>
        <NavDrop
          navDrop={navDrop}
          setDrop={setDrop}
          handleInquiryOpen={handleInquiryOpen}
        />
      </>}
    </>
  )
}