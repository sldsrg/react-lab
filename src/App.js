import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Menu from './components/Menu'
import Home from './components/Home'
import LocalStorageLab from './components/LocalStorageLab'

const useStyles = createUseStyles({
  main: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'stretch',
    alignItems: 'stretch'
  },
  content: {
    margin: 16,
    flex: 1
  }
})

function App() {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.main}>
        <Menu />
        <div className={classes.content}>
          <Switch>
            <Route path='/localStorageLab'>
              <LocalStorageLab />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
