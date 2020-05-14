import React from 'react'
import resume from '../documents/resume.pdf'

const Resume = () => {
  return (
    <>
      <div className="resume">
        <object
          data={resume}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default Resume
