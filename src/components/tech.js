import React from 'react';
import { useStateValue } from '../state'

export default function Tech() {
  const [{ theTheme },] = useStateValue()

  const technologies = [
    {
      type: 'Languages',
      list: ['JavaScript', 'TypeScript', 'HTML5', 'SCSS']
    },
    {
      type: 'Frameworks',
      list: ['React', 'Gatsby', 'Express', 'Koa.js']
    },
    {
      type: 'Storage',
      list: ['MongoDB', 'SQL', 'NoSQL', 'AWS']
    },
    {
      type: 'Tools',
      list: ['React Redux/Context', 'Material-UI', 'Lodash', 'Regex']
    },
  ]

  return (
    <>
      <div id='tech-section' className="tech-section poly" style={theTheme.poly}>
        <div className="tech-max">
          {technologies.map((tech, i) => (
            <div key={i} className="card">
              <h1 style={theTheme.accent}>{tech.type}</h1>
              <div className="card-items">
                {tech.list.map((item, i) => (
                  <div key={i} className="item">
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
