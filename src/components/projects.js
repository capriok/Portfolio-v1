import React from 'react';
import portrait from '../img/portraitnull.png'

export default function Projects() {
  return (
    <>
      <div id='projects-section' className="projects-section">
        <div className="project-card">
          <div className="project-body">
            <h1>Title</h1>
            <p>Description</p>
            <p>Tags</p>
            <div className="tags">
              <span className="tag-plaque">Javascript</span>
              <span className="tag-plaque">React</span>
              <span className="tag-plaque">CSS</span>
            </div>
          </div>
          <div className="project-thumb">
            <img src={portrait} alt="" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="project-card">
          <div className="project-body">
            <h1>Title</h1>
            <p>Description</p>
            <p>Tags</p>
            <div className="tags">
              <span className="tag-plaque">Javascript</span>
              <span className="tag-plaque">React</span>
              <span className="tag-plaque">CSS</span>
            </div>
          </div>
          <div className="project-thumb">
            <img src={portrait} alt="" />
          </div>
        </div>
        <div className="project-card">
          <div className="project-body">
            <h1>Title</h1>
            <p>Description</p>
            <p>Tags</p>
            <div className="tags">
              <span className="tag-plaque">Javascript</span>
              <span className="tag-plaque">React</span>
              <span className="tag-plaque">CSS</span>
            </div>
          </div>
          <div className="project-thumb">
            <img src={portrait} alt="" />
          </div>
        </div>

      </div>
    </>
  );
}
