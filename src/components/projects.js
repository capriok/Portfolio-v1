import React from 'react';
import portrait from '../img/portraitnull.png'
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';

export default function Projects({ openModal, setContent }) {

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

  const projects = [
    {
      title: 'MyTube Music',
      snippet: 'Youtube Data API consumed to create a client sided music streaming application wrapped in Electron',
      tags: ['Javascript', 'React', 'Electron', 'CSS', '2020'],
      thumb: portrait,
      link: 'https://github.com/capriok/MyTube'
    },
    {
      title: 'Portfolio',
      snippet: 'Sofware developer tailored portfolio',
      tags: ['Javascript', 'React', 'SCSS', '2020'],
      thumb: portrait,
      link: 'https://github.com/capriok/Portfolio'
    },
    {
      title: 'Arte Bella Engraving',
      snippet: 'Small business client, single page website',
      tags: ['Javascript', 'React', 'SCSS', '2019'],
      thumb: portrait,
      link: 'https://github.com/capriok/Arte-Bella'
    },
    {
      title: 'E-Commerce',
      snippet: 'High end fashion website inspired by Polo Ralph Lauren site',
      tags: ['Javascript', 'React', 'Electron', 'CSS', '2019'],
      thumb: portrait,
      link: 'https://github.com/capriok'
    },
    {
      title: 'TookFeed',
      snippet: 'Harnessing the power of News API to stay up to date on global or local news',
      tags: ['Javascript', 'React', 'Electron', 'CSS', '2019'],
      thumb: portrait,
      link: 'https://github.com/capriok/TookFeed'
    },
    {
      title: 'Theme Template Distribution',
      snippet: 'Combining aesthetics with user customizable theme templates',
      tags: ['HTML', 'CSS', 'Jquery', '2014'],
      thumb: portrait,
      link: 'https://themesfromkyle.tumblr.com/'
    }
  ]
  return (
    <>
      <div id='projects-section' className="projects-section">
        {/* --------------------------------------------------MyTube Music */}

        {projects.map((item, i) => (
          <>
            <div className="project-card" >
              <div className="project-body" key={i}>
                <h1>{item.title}</h1>
                <p>{item.snippet}</p>
                <div className="foot">
                  <div className="tags">
                    <span>#</span>
                    {item.tags.map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </div>
                  <div className="buttons">
                    <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                      <Button className={classes.navigation} onClick={() => {
                        openModal(true)
                        setContent(item)
                      }}>
                        <div className="button-text">
                          see in depth
                        </div>
                      </Button>
                      <Button className={classes.navigation}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="button-text">
                          Source
                        </div>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className="project-thumb">
                <img src={item.thumb} alt="" />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
