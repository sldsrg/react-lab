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

function Menu(props) {
  const { entries } = props
  const classes = useStyles()

  return (
    <ul className={classes.list}>
      {entries.map(({ path, name }, index) => (
        <li key={index}>
          <NavLink to={path} exact>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Menu
