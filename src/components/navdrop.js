import React from 'react';
import useLockBodyScroll from './hooks/uselockbodyscroll'

export default function NavDrop({ navDrop, setDrop, handleInquiryOpen }) {
  useLockBodyScroll()

  const inquiryClick = () => {
    setDrop(false)
    handleInquiryOpen()
  }

  return (
    <>
      <div className="modal-clickout" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} onTouchStart={() => setDrop(!navDrop)}></div>
      <div className="navdrop">
        <a href="/about"><p>About Me</p></a>
        <a href="/projects"><p>Projects</p></a>
        <a href="/"><p>Resume</p></a>
        <a onClick={() => inquiryClick()} ><p>Contact</p></a>
      </div>
    </>
  );
}

