import React from 'react'
import { createUseStyles } from 'react-jss'
import cx from 'classnames'

const useStyles = createUseStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '64px 64px 64px',
    justifyContent: 'space-evenly',
    gridGap: 8
  },
  item: {
    backgroundColor: 'teal',
    textAlign: 'center'
  },
  wideItem: {
    gridColumn: '1 / 3'
  },
  pos: {
    gridArea: '1/2',
    transition: '2s',
    '&:hover': {
      gridColumnEnd: 4
    }
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
      <div className={cx(classes.item, classes.pos)}>POS</div>
    </div>
  )
}

export default GridLab
