import React from 'react';
import portrait from '../img/portraitnull.png'

export default function Projects() {
  return (
    <>
      <div id='projects-section' className="projects-section">
        {/* ------------------------------------------------------------- */}
        <div className="project-card">
          <div className="project-body">
            <h1>MyTube Music</h1>
            <p>Youtube Data API consumed to create client sided music streaming application wrapped in Electron</p>
            <p>Tags</p>
            <div className="tags">
              <span className="tag-plaque">Javascript</span>
              <span className="tag-plaque">Electron</span>
              <span className="tag-plaque">React</span>
              <span className="tag-plaque">Context</span>
              <span className="tag-plaque">CSS</span>
            </div>
          </div>
          <div className="project-thumb">
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className="divider"></div>
        <div className="project-card">
          <div className="project-body">
            <h1>E-commerce</h1>
            <p>High end fashion website inspired by Polo Ralph Lauren site</p>
            <p>Tags</p>
            <div className="tags">
              <span className="tag-plaque">Javascript</span>
              <span className="tag-plaque">React</span>
              <span className="tag-plaque">GrapohQL</span>
              <span className="tag-plaque">CSS</span>
            </div>
          </div>
          <div className="project-thumb">
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className="project-card">
          <div className="project-body">
            <h1>TookFeed</h1>
            <p>Harnessing the power or News API to stay up to date on global or local news</p>
            <p>Tags</p>
            <div className="tags">
              <span className="tag-plaque">Javascript</span>
              <span className="tag-plaque">React</span>
              <span className="tag-plaque">Context API</span>
              <span className="tag-plaque">CSS</span>
            </div>
          </div>
          <div className="project-thumb">
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className="project-card">
          <div className="project-body">
            <h1>Rock Paper Scissors</h1>
            <p>Early testimate to javascript skill</p>
            <p>Tags</p>
            <div className="tags">
              <span className="tag-plaque">Javascript</span>
              <span className="tag-plaque">HTML</span>
              <span className="tag-plaque">CSS</span>
            </div>
          </div>
          <div className="project-thumb">
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
      </div>
    </>
  );
}
