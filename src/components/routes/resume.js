import React, { useEffect } from 'react'
import { Button } from 'godspeed'

const FILE = ''
const Resume = () => {
  const isMobile = window.innerWidth > 500
  useEffect(() => { document.title = `Portfolio | Resume` }, [])
  return (
    <>
      <br />
      <br />
      <a style={{ color: 'black' }} href="https://www.kylecaprio.dev">See new portfolio here</a>
      {isMobile
        ? <div className="resume">
          <object
            data={FILE}
            type="application/pdf"
            width="100%"
            height="100%"
          >Oops</object>
        </div>
        : <div className="resume-mobile">
          <Button className="res-btn" text="View Resume" size="sm" shadow
            onClick={() => window.open(FILE)} />
        </div>
      }
    </>
  )
}

export default Resume
