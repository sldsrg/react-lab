import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Menu from './components/Menu'
import Home from './components/Home'
import ResizeObserverLab from './components/ResizeObserverLab'
import LocalStorageLab from './components/LocalStorageLab'
import PrintingLab from './components/PrintingLab'

const useStyles = createUseStyles({
  main: {
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'stretch',
    alignItems: 'stretch'
  },
  sidebar: {
    flex: '0 0 auto'
  },
  content: {
    margin: 16,
    flex: '1 1 auto'
  }
})

function App() {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.main}>
        <nav className={classes.sidebar}>
          <Menu />
        </nav>
        <div className={classes.content}>
          <Switch>
            <Route path='/printingLab'>
              <PrintingLab />
            </Route>
            <Route path='/resizeObserverLab'>
              <ResizeObserverLab />
            </Route>
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
