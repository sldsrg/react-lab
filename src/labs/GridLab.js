import React from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

const useStyles = createUseStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 8
  },
  item: {
    backgroundColor: 'teal'
  },
  wideItem: {
    gridColumnStart: 1,
    gridColumnEnd: 3
  }
})

function GridLab() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.item}>1</div>
      <div className={cx(classes.item, classes.wideItem)}>2</div>
      <div className={classes.item}>3</div>
      <div className={classes.item}>4</div>
      <div className={classes.item}>5</div>
      <div className={classes.item}>6</div>
    </div>
  )
}

export default GridLab
