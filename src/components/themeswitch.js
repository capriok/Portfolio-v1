import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Switch from "@material-ui/core/Switch"

const ThemeSwitch = withStyles({
  thumbChecked: {
    backgroundImage: `url("https://dejpknyizje2n.cloudfront.net/marketplace/products/crescent-moon-icon-sticker-1544043862.2615688.png")`,
    backgroundSize: "13px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  thumbUnchecked: {
    backgroundImage: `url("https://www.svgrepo.com/show/65427/sun.svg")`,
    backgroundSize: "15px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  switchBase: {
    color: "#424242",
    "&$checked": {
      color: "#424242",
    },
    "&$checked + $track": {
      backgroundColor: "#fff",
    },
  },
  checked: {},
  track: {},
  root: {
    position: 'relative',
    marginLeft: 'auto'
  },
})(({ classes, ...props }) => {
  return (
    <Switch
      color="default"
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
        thumb: props.checked ? classes.thumbChecked : classes.thumbUnchecked,
      }}
      {...props}
    />
  )
})

export default ThemeSwitch