import React from "react";
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';

export default function Footer() {
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
      <div className="footer-section">
        <div className="footer-content">
          {/* <h1>title</h1>
          <p>paragraph</p> */}
          <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
            <Button className={classes.navigation} href="https://github.com/capriok">
              <div className="button-text">
                Github
              </div>
            </Button>
            <Button className={classes.navigation} href="https://www.linkedin.com/in/kyle-caprio-568808111">
              <div className="button-text">
                LinkedIn
              </div>
            </Button>
            <Button className={classes.navigation} href="https://codepen.io/capriok">
              <div className="button-text">
                Codepen
              </div>
            </Button>
            <Button className={classes.navigation} href="/#">
              <div className="button-text">
                Resume
              </div>
            </Button>
          </ButtonGroup>
          <p className="rights">© 2020 Kyle Caprio | All rights reserved.</p>
        </div>
      </div>
    </>
  );
}


