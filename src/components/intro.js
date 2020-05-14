import React from 'react';
import { Link } from 'react-router-dom'
import { useStateValue } from '../state'
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import github from '../gallery/github.png'
import linkedin from '../gallery/linkedin.png'
import portrait from '../gallery/portrait.jpg'

export default function Intro() {
  const [{ darkState, theTheme },] = useStateValue()


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
      <div id='intro-section' className="intro-section">
        <section>
          <div className="float">
            <div className="greeting" style={theTheme.whiteFont}>
              <h1>I'm Kyle</h1>
              <p>A software developer based in Tempe, AZ</p>
              <div className="border" style={darkState ? { borderBottom: '1px solid white' } : {}}></div>
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
                <Button className={classes.navigation}>
                  <Link className="button-text" to="/about">
                    About
                  </Link>
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="card" style={theTheme.accent}>
            <div className="head">
              <img src={portrait} alt="" />
              <h1>Get in touch</h1>
            </div>
            <div className="two-body"></div>
            <div className="two-btns">
              <ButtonGroup size="small" aria-label="small outlined button group">
                <Button
                  className={classes.socials}
                  href="https://github.com/capriok"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={github} alt="" /></Button>
                <Button
                  className={classes.socials}
                  href="https://www.linkedin.com/in/kyle-caprio-568808111"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={linkedin} alt="" /></Button>
              </ButtonGroup>
            </div>
            <p>capriodev@gmail.com</p>
          </div>
        </section>
      </div>
    </>
  );
}
