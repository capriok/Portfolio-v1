import React from 'react';
import { useStateValue } from '../state'

export default function Tech() {
  const [{ theTheme },] = useStateValue()

  const technologies = [
    {
      type: 'Languages',
      list: ['Javascript', 'HTML5', 'CSS', 'SCSS']
    },
    {
      type: 'Frameworks',
      list: ['Node', 'React', 'Redux', 'Express']
    },
    {
      type: 'Storage',
      list: ['MongoDB', 'GraphQL', 'SQL']
    },
    {
      type: 'Tools',
      list: ['React Context', 'Material-UI', 'Lodash', 'Regex']
    },
  ]

  return (
    <>
      <div id='tech-section' className="tech-section poly" style={theTheme.poly}>
        <div className="tech-max">
          {technologies.map((tech, i) => (
            <div key={i} className="card">
              <h1 style={theTheme.accent}>{tech.type}</h1>
              {tech.list.map((item, i) => (
                <div key={i}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
