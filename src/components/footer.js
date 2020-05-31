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

  const buttons = [{
    href: 'https://github.com/capriok',
    name: 'Github'
  },
  {
    href: 'https://www.linkedin.com/in/kyle-caprio-48096319b',
    name: 'LinkedIn'
  },
  {
    href: '/resume',
    name: 'Resume'
  }]

  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <ButtonGroup className="buttons" size="small" aria-label="small outlined button group">
            {buttons.map((b, i) => (
              <Button className={classes.btn} key={i}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer">
                <div className="button-text">
                  {b.name}
                </div>
              </Button>
            ))}
          </ButtonGroup>
          <p className="rights">© 2020 Kyle Caprio | All rights reserved.</p>
        </div>
      </div>
    </>
  );
}


