import React from "react";
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';

export default function Footer() {
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
      <div className="footer-section">
        <div className="footer-content">
          <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
            <Button className={classes.btn} href="https://github.com/capriok">
              <div className="button-text">
                Github
              </div>
            </Button>
            <Button className={classes.btn} href="https://www.linkedin.com/in/kyle-caprio-568808111">
              <div className="button-text">
                LinkedIn
              </div>
            </Button>
            <Button className={classes.btn} href="/#">
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


