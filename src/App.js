import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import Menu from './components/Menu'
import Home from './components/Home'
import SVGLab from './labs/SVGLab'
import GridLab from './labs/GridLab'
import ResizeObserverLab from './labs/ResizeObserverLab'
import LocalStorageLab from './labs/LocalStorageLab'
import PrintingLab from './labs/PrintingLab'
import FramePrintingLab from './labs/FramePrintingLab'
import MediaQueryLab from './labs/MediaQueryLab'

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
  },
  '@media print': {
    sidebar: {
      display: 'none'
    }
  }
})

const entries = [
  { path: '/', component: <Home />, name: 'Home' },
  { path: '/SVGLab', component: <SVGLab />, name: 'SVG Lab' },
  { path: '/GridLab', component: <GridLab />, name: 'Grid Lab' },
  { path: '/mediaQueryLab', component: <MediaQueryLab />, name: 'Media Query Lab' },
  { path: '/framePrintingLab', component: <FramePrintingLab />, name: 'Frame Printing Lab' },
  { path: '/printingLab', component: <PrintingLab />, name: 'Printing Lab' },
  { path: '/resizeObserverLab', component: <ResizeObserverLab />, name: 'Resize Observer Lab' },
  { path: '/localStorageLab', component: <LocalStorageLab />, name: 'Local Storage Lab' }
]

function App() {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.main}>
        <nav className={classes.sidebar}>
          <Menu entries={entries} />
        </nav>
        <div className={classes.content}>
          <Switch>
            {entries.map(({ path, component }, index) => (
              <Route key={index} path={path} exact>
                {component}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
