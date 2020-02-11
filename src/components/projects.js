import React from 'react';
import portrait from '../img/portraitnull.png'
import { Button, makeStyles } from '@material-ui/core';

export default function Projects() {
  const useStyles = makeStyles({
    navigation: {
      color: "white",
      padding: "2px 20px 1px 20px",
      border: '2px solid grey',
      backgroundColor: "rgb(25, 25, 25)",
      "&:hover": {
        backgroundColor: "rgb(35, 35, 35)"
      }
    },
    socials: {
      color: "white",
      padding: '5px 15px 5px 15px',
      border: '1px solid white',
      backgroundColor: "rgb(25, 25, 25)",
      "&:hover": {
        backgroundColor: "rgb(35, 35, 35)"
      }
    }
  });
  const classes = useStyles();
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
      </div>
    </>
  );
}
