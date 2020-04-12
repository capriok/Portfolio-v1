import React from 'react';
import { Link } from 'react-router-dom'
import { useStateValue } from '../../state'
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default function Projects({ openModal, setContent }) {
  const [{ theTheme, projects },] = useStateValue()
  let isMobile = window.innerWidth <= 700

  const useStyles = makeStyles({
    btn: {
      color: "white",
      padding: "2px 20px 1px 20px",
      border: '2px solid grey',
      backgroundColor: "rgb(25, 25, 25)",
      "&:hover": {
        backgroundColor: "rgb(35, 35, 35)"
      }
    }
  });
  const classes = useStyles();

  return (
    <>
      {projects.map((item, i) => (
        <ScrollAnimation className="project-anim"
          initiallyVisible={true}
          duration={.40}
          animateIn="pulse"
          key={i}>
          <>
            <div className="project-card-template">
              <div className="body">
                <div className="head" style={theTheme.accent}><h1>{item.title}</h1></div>
                <div className="body">
                  <p>{item.snippet}</p>
                  <div className="foot">
                    <div className="tags">
                      {item.tags.map((item, i) => (
                        <span key={i} > {item}</span>
                      ))}
                    </div>
                    <div className="buttons">
                      <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                        <Button className={classes.btn} onClick={async () => {
                          setContent(item)
                          if (!isMobile) openModal(true)
                        }}>
                          {isMobile
                            ? <Link to={item.route}>
                              <div className="button-text">
                                see in depth
                                  </div>
                            </Link>
                            : <div className="button-text">
                              see in depth
                              </div>
                          }
                        </Button>
                        <Button className={classes.btn}
                          href={item.demo}
                          target="_blank"
                          rel="noopener noreferrer">
                          <div className="button-text">
                            Demo
                        </div>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumb">
                <img src={item.thumb} alt="" />
              </div>
            </div>
          </>
        </ScrollAnimation>
      ))}
    </>
  );
}
