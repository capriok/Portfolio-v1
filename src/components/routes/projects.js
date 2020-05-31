import React, { useEffect } from 'react'
import { useStateValue } from '../../state'
import ProjectCards from '../templates/projectcards';
import projectsBanner from '../../gallery/projects.svg'

const Projects = ({ openModal, setContent }) => {
  const [{ theTheme },] = useStateValue()
  useEffect(() => { document.title = `Portfolio | Projects` }, [])
  return (
    <div className="projects-route">
      <div className="banner poly">
        <img src={projectsBanner} alt="" />
      </div>
      <div className="body">
        <h1 className="title" style={theTheme.whiteFont}>—— Projects ——</h1>
        <ProjectCards openModal={openModal} setContent={setContent} />
      </div>
    </div>
  )
}

export default Projects
