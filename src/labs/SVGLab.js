import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Spring } from 'react-spring/renderprops'

const useStyles = createUseStyles({
  container: {
    padding: '1em'
  },
  piece: {
    transition: '1s',
    stroke: 'black',
    strokeWidth: '2',
    fill: 'red'
  }
})

function SVGLab() {
  const [pos, setPos] = useState({ x: 120, y: 200 })
  const classes = useStyles()

  return (
    <svg
      viewBox='-10 -10 650 650'
      className={classes.container}
      onClick={() => setPos(prev => ({ x: prev.x + 80, y: prev.y + 80 }))}
    >
      <defs>
        <path
          className={classes.piece}
          id='blackMan'
          d={`m -36,0 a 36,36 0 1,0 72,0 a 36,36 0 1,0 -72,0 
          m 8,0 a 28,28 0 1,0 56,0 a 28,28 0 1,0 -56,0 
          m 8,0 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0`}
        />
      </defs>
      <circle cx={40} cy={120} r={36} className={classes.piece}></circle>
      <circle cx={120} cy={40} r={36} className={classes.piece}></circle>
      <Spring to={pos}>{props => <use href='#blackMan' {...props}></use>}</Spring>
      <circle cx={200} cy={120} r={36} className={classes.piece}></circle>
    </svg>
  )
}

export default SVGLab
