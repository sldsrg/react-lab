import React from 'react'
import { Link } from 'react-router-dom'

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
      color: 'gold'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})

function Menu() {
  const classes = useStyles()

  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/localStorageLab'>Local Storage Lab</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
