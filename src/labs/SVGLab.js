import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    padding: '1em'
  },
  circle: {
    fill: 'brown',
    r: '6%',
    transition: '.5s',
    '&:hover': {
      r: '6.5%'
    }
  }
})

function SVGLab() {
  const [pos, setPos] = useState({ x: 120, y: 200 })
  const classes = useStyles()
  return (
    <svg viewBox='-10 -10 650 650' className={classes.container}>
      <circle cx={40} cy={120} className={classes.circle}></circle>
      <circle cx={120} cy={40} className={classes.circle}></circle>
      <circle
        cx={pos.x}
        cy={pos.y}
        onClick={() => setPos(prev => ({ x: prev.x + 80, y: prev.y + 80 }))}
        className={classes.circle}
      ></circle>
      <circle cx={200} cy={120} className={classes.circle}></circle>
    </svg>
  )
}

export default SVGLab
