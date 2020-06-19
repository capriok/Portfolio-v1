import React, { useEffect } from 'react'
import Button from 'godspeed/build/Button'
const Resume = () => {
  const isMobile = window.innerWidth > 500
  useEffect(() => { document.title = `Portfolio | Resume` }, [])
  return (
    <>
      {isMobile
        ? <div className="resume">
          <object
            data="https://files.kylecaprio.dev/Kyle-Caprio-Resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >Oops</object>
        </div>
        : <div className="resume-mobile">
          <Button className="res-btn" text="View Resume" size="sm" shadow
            onClick={() => window.open('https://files.kylecaprio.dev/Kyle-Caprio-Resume.pdf')} />
        </div>
      }
    </>
  )
}

export default Resume
