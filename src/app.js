import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useStateValue } from './state'
import { Button, makeStyles } from '@material-ui/core';
import About from './components/about';
import { ProjectDisplay } from './components/templates/projectdisplay';
import Navbar from "./components/navbar";
import Intro from './components/intro';
import Tech from './components/tech';
import ProjcetCards from './components/templates/projectcards';
import Footer from "./components/footer";
import projectsBanner from './gallery/projects.svg'
import "../src/components/components.scss";
import "./index.scss";
import { darkTheme as dark } from './theme'

// import { BaseNavbar } from 'godspeed'

export default function App() {
  const [{ darkState, theTheme, projects }, dispatch] = useStateValue()
  const [modalOpen, openModal] = useState(false)
  const [modalContent, setContent] = useState(projects[0])

  const trueDarkState = localStorage.getItem('theme') === 'true'

  const useStyles = makeStyles({
    btn: {
      color: "white",
      padding: "2px 20px 1px 20px",
      margin: "15px 0px 20px 0px",
      border: '2px solid grey',
      backgroundColor: "rgb(25, 25, 25)",
      "&:hover": {
        backgroundColor: "rgb(35, 35, 35)"
      }
    }
  });
  const classes = useStyles();

  useEffect(() => {
    trueDarkState
      ? dispatch({ type: 'theme', theTheme: dark })
      : dispatch({ type: 'theme', theTheme: {} })
  }, [darkState])

  ////////// NOTES

  // subtle background animations movement
  // see more on tech cards

  // theme logic: DONE!
  //  create darkTheme obj that holds any element on the dom that reacts to themeSwtich
  //  eg. const daktheme = obj > elements > style attributes > values
  //  import darkTheme to context provider, useEffect to apply theme on one condition
  //  darkState context boolean to determine if darkTheme obj is passed to the style artibute
  //  theTheme context obj, default empty, to await true darkState boolean 
  //  if darkState true, point theTheme to darkState so that components may resolve theme change
  //  set style atribute of all components to corresponding theTheme properties to await themeSwitch to flip darkState 

  //////////

  return (
    <>
      <div className="main" style={theTheme.main}>
        <Router>
          <Navbar />
          {/* <BaseNavbar /> */}
          {/* ------------------------- PROJECT MODAL */}
          {modalOpen &&
            <>
              <div className="modal-clickout" onClick={() => openModal(false)} />
              <div className="project-modal" style={theTheme.main}>
                <ProjectDisplay item={modalContent} />
              </div>
            </>
          }
          {/* ------------------------- SLASH ROUTE */}
          <Route exact path="/" render={() => (
            <>
              <Intro />
              <Tech />
              <div id='projects-section' className="projects-section">
                <ProjcetCards openModal={openModal} setContent={setContent} />
              </div>
              <Button className={classes.btn} onClick={() => { window.scrollTo(0, 0) }}>
                <h1 className="button-text">Get in touch</h1>
              </Button>
            </>
          )}></Route>
          {/* ------------------------- LONE PROJECT ROUTE */}
          {projects.map((item, i) => (
            <Route path={item.route} key={i} render={() => (
              <div className="lone-project-route">
                <ProjectDisplay item={item} />
              </div>
            )}>
            </Route>
          ))}
          {/* ------------------------- ABOUT ROUTE */}
          <Route path="/about" render={() => (
            <About />
          )}></Route>
          {/* ------------------------- PROJECTS LIST ROUTE */}
          <Route path="/projects" render={() => (
            <div className="projects-route">
              <div className="banner poly">
                <img src={projectsBanner} alt="" />
              </div>
              <div className="body">
                <h1 className="title" style={theTheme.whiteFont}>—— Projects ——</h1>
                <ProjcetCards openModal={openModal} setContent={setContent} />
              </div>
            </div>
          )}></Route>
          <Footer />
        </Router>
      </div>
    </>
  );
}
