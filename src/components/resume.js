import React, { useEffect } from 'react'
import resume from '../documents/Kyle-Caprio-Resume.pdf'
import ResumeJPG from '../gallery/resume.jpg'
const Resume = () => {
  const isMobile = window.innerWidth > 500
  useEffect(() => { document.title = `Portfolio | Resume` }, [])
  return (
    <>
      {isMobile
        ? <div className="resume">
          <object
            data={resume}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>
        : <img className="resume-mobile" src={ResumeJPG} alt="" />
      }
    </>
  )
}

export default Resume
