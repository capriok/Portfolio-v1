import React from 'react';

export default function ProjectModal({ setOpen }) {
  return (
    <>
      <div className="modal-clickout" onClick={() => setOpen(false)}>
        <div className="project-modal">
          <button onClick={() => setOpen(false)}>close</button>
          <h1>title</h1>
          {/* slideshow */}
          <p>p</p>
          <p>p</p>
          <span>s</span>
        </div>
      </div>
    </>
  );
}
