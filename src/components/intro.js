import React from 'react';
import portrait from '../img/portrait.jpg'
// import portraitnull from '../img/portraitnull.png'
// import github from '../img/github.png'
import githubinv from '../img/githubinv.png'
// import linkedin from '../img/linkedin.png'
import linkedininv from '../img/linkedininv.png'
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';

export default function Intro() {

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
      <div id='intro-section' className="intro-section poly1">
        <div className="intro-one">
          <div className="one-card">
            <h1>I'm Kyle Caprio</h1>
            <p>A software developer based in Tempe, AZ</p>
            <div className="one-border"></div>
            <h1>Explore Further</h1>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button className={classes.navigation} href="#tech-section">
                <div className="button-text">
                  Technologies
                  </div>
              </Button>
              <Button className={classes.navigation} href="#projects-section">
                <div className="button-text">
                  Projects
                  </div>
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="separator"><div className="line"></div></div>
        <div className="intro-two">
          <div className="two-card">
            <div className="two-head">
              <img src={portrait} alt="" />
              <h1>Get in touch</h1>
            </div>
            <div className="two-body">
            </div>
            <div className="two-btns">
              <ButtonGroup size="small" aria-label="small outlined button group">
                <Button
                  className={classes.socials}
                  href="https://github.com/capriok"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={githubinv} alt="" /></Button>
                <Button
                  className={classes.socials}
                  href="https://www.linkedin.com/in/kyle-caprio-568808111"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={linkedininv} alt="" /></Button>
              </ButtonGroup>
            </div>
            <h2>capriodev@gmail.com</h2>
          </div>
        </div>
      </div>
    </>
  );
}
