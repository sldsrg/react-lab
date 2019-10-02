import React from 'react'
import { NavLink } from 'react-router-dom'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  list: {
    minHeight: '100%',
    listStyle: 'none',
    backgroundColor: 'teal',
    margin: 0,
    padding: {
      top: 16,
      right: '1rem',
      bottom: 16,
      left: '1rem'
    },
    '& a': {
      textDecoration: 'none',
      fontWeight: 'bold',
      color: 'gold',
      '&.active': {
        color: 'white',
        '&::before': {
          content: '">"',
          position: 'absolute',
          marginLeft: '-1em'
        }
      }
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})

function Menu() {
  const classes = useStyles()

  return (
    <ul className={classes.list}>
      <li>
        <NavLink to='/' exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/mediaQueryLab'>Media Query Lab</NavLink>
      </li>
      <li>
        <NavLink to='/printingLab'>Printing Lab</NavLink>
      </li>
      <li>
        <NavLink to='/resizeObserverLab'>Resize Observer Lab</NavLink>
      </li>
      <li>
        <NavLink to='/localStorageLab'>Local Storage Lab</NavLink>
      </li>
    </ul>
  )
}

export default Menu
