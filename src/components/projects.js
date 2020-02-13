import React from 'react';
import portrait from '../img/portraitnull.png'
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import worldwide from '../img/worldwide.jpg'
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
      <div id='projects-section' className="projects-section poly2">
        {/* --------------------------------------------------MyTube Music */}
        <div className="project-card">
          <div className="project-body">
            <h1>MyTube Music</h1>
            <p>Youtube Data API consumed to create client sided music streaming application wrapped in Electron</p>
            <div className="foot">
              <div className="tags">
                <span>#</span>
                <span className="tag-plaque">Javascript</span>
                <span className="tag-plaque">React</span>
                <span className="tag-plaque">Electron</span>
                <span className="tag-plaque">CSS</span>
                <span className="tag-plaque">2020</span>
              </div>
              <div className="buttons">
                <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                  <Button className={classes.navigation} href="#tech-section">
                    <div className="button-text">
                      See More
                  </div>
                  </Button>
                  <Button className={classes.navigation}
                    href="https://github.com/capriok/MyTube"
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
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* --------------------------------------------------Portfolio */}
        <div className="project-card">
          <div className="project-body">
            <h1>Portfolio</h1>
            <p>My first solftware developer tailored portfolio</p>
            <div className="foot">
              <div className="tags">
                <span>#</span>
                <span className="tag-plaque">Javascript</span>
                <span className="tag-plaque">React</span>
                <span className="tag-plaque">SCSS</span>
                <span className="tag-plaque">2020</span>
              </div>
              <div className="buttons">
                <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                  <Button className={classes.navigation} href="#tech-section">
                    <div className="button-text">
                      See More
                  </div>
                  </Button>
                  <Button className={classes.navigation}
                    href="https://github.com/capriok/Portfolio"
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
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* --------------------------------------------------Arte Bella Engraving */}
        <div className="divider"></div>
        <div className="project-card">
          <div className="project-body">
            <h1>Arte Bella Engraving</h1>
            <p>Small business client, single page website</p>
            <div className="foot">
              <div className="tags">
                <span>#</span>
                <span className="tag-plaque">Javascript</span>
                <span className="tag-plaque">React</span>
                <span className="tag-plaque">SCSS</span>
                <span className="tag-plaque">2019</span>
              </div>
              <div className="buttons">
                <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                  <Button className={classes.navigation} href="#tech-section">
                    <div className="button-text">
                      See More
                  </div>
                  </Button>
                  <Button className={classes.navigation}
                    href="https://github.com/capriok/Arte-Bella"
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
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* --------------------------------------------------E-commerce */}
        <div className="divider"></div>
        <div className="project-card">
          <div className="project-body">
            <h1>E-commerce</h1>
            <p>High end fashion website inspired by Polo Ralph Lauren site</p>
            <div className="foot">
              <div className="tags">
                <span>#</span>
                <span className="tag-plaque">Javascript</span>
                <span className="tag-plaque">React</span>
                <span className="tag-plaque">GrapohQL</span>
                <span className="tag-plaque">CSS</span>
                <span className="tag-plaque">2019</span>
              </div>
              <div className="buttons">
                <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                  <Button className={classes.navigation} href="#tech-section">
                    <div className="button-text">
                      See More
                  </div>
                  </Button>
                  <Button className={classes.navigation}
                    href="#projects-section"
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
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* --------------------------------------------------TookFeed */}
        <div className="project-card">
          <div className="project-body">
            <h1>TookFeed</h1>
            <p>Harnessing the power or News API to stay up to date on global or local news</p>
            <div className="foot">
              <div className="tags">
                <span>#</span>
                <span className="tag-plaque">Javascript</span>
                <span className="tag-plaque">React</span>
                <span className="tag-plaque">CSS</span>
                <span className="tag-plaque">2019</span>
              </div>
              <div className="buttons">
                <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                  <Button className={classes.navigation} href="#tech-section">
                    <div className="button-text">
                      See More
                  </div>
                  </Button>
                  <Button className={classes.navigation}
                    href="https://github.com/capriok/TookFeed"
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
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* --------------------------------------------------Rock Paper Scissors */}
        <div className="project-card">
          <div className="project-body">
            <h1>Rock Paper Scissors</h1>
            <p>Early testimate to javascript skill</p>
            <div className="foot">
              <div className="tags">
                <span>#</span>
                <span className="tag-plaque">Javascript</span>
                <span className="tag-plaque">HTML</span>
                <span className="tag-plaque">CSS</span>
                <span className="tag-plaque">2018</span>
              </div>
              <div className="buttons">
                <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                  <Button className={classes.navigation} href="#tech-section">
                    <div className="button-text">
                      See More
                  </div>
                  </Button>
                  <Button className={classes.navigation}
                    href="#projects-section"
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
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* --------------------------------------------------Theme Template Distribution */}
        <div className="project-card">
          <div className="project-body">
            <h1>Theme Template Distribution</h1>
            <p>Combining aesthetics with user customizable theme templates</p>
            <div className="foot">
              <div className="tags">
                <span>#</span>
                <span className="tag-plaque">Jquery</span>
                <span className="tag-plaque">HTML</span>
                <span className="tag-plaque">CSS</span>
                <span className="tag-plaque">2014</span>
              </div>
              <div className="buttons">
                <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
                  <Button className={classes.navigation} href="#tech-section">
                    <div className="button-text">
                      See More
                  </div>
                  </Button>
                  <Button className={classes.navigation}
                    href="#projects-section"
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
            <img src={portrait} alt="" />
          </div>
        </div>
        {/* -------------------------------------------------- */}
      </div>
    </>
  );
}
