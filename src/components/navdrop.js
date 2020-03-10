import React from 'react';
import { useStateValue } from '../state'
import useLockBodyScroll from './hooks/uselockbodyscroll'

export default function NavDrop({ navDrop, setDrop }) {
  const [{ darkState },] = useStateValue()
  useLockBodyScroll()

  return (
    <>
      <div className="modal-clickout" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} onTouchStart={() => setDrop(!navDrop)}></div>
      <div className="navdrop">
        <a href="/about"><p>About</p></a>
        <a href="/projects"><p>Projects</p></a>
        <a href="/"><p>Resume</p></a>
      </div>
    </>
  );
}

