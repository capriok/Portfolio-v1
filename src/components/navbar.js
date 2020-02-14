import React, { useEffect } from 'react'
import { Switch } from '@material-ui/core';
import ThemeSwitch from "./themeswitch"
import { useStateValue } from '../state'
import _ from 'lodash'

export default function Navbar() {
  const [{ theme }, dispatch] = useStateValue()
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    var keys = _.keys(_.pickBy(state));
    console.log(keys[0]);

  };

  useEffect((

  ) => { }, [theme])

  return (
    <div className='navbar'>
      <div className="title"><a href="/"><h1>Kyle Caprio</h1></a></div>
      <div className="buttons">
        <a href='#intro-section'><p>Introduction</p></a>
        <a href='#tech-section'><p>Knowledge</p></a>
        <a href='#projects-section'><p>Endeavors</p></a>
        <a href='/#'><p>Resume</p></a>
      </div>
      <ThemeSwitch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
      />
    </div>
  )
}