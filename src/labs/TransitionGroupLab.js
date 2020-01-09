import React, { useState, useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  transitionEnter: {
    opacity: 0,
    // transform: 'scale(0.1)'
  },

  transitionEnterActive: {
    opacity: 1,
    // transform: 'scale(1.0)',
    transition: 'opacity ease-out 300ms'
  },

  transitionExit: {
    opacity: 1,
    // transform: 'scale(1.0)'
  },

  transitionExitActive: {
    opacity: 0,
    // transform: 'scale(0.1)',
    transition: 'opacity 700ms ease-in 300ms'
  },
})

function TransitionGroupLab() {
  const [pieces, setPieces] = useState([1, 2, 3, 4, 5])
  const classes = useStyles()
  const next = useRef(6)

  return (
    <div>
      <button onClick={
        () => setPieces(prev => [...prev, next.current++])
      }>Add Item</button>
      <TransitionGroup>
        {pieces.map(piece => <CSSTransition key={piece}
          timeout={1000} classNames={{
            enter: classes.transitionEnter,
            enterActive: classes.transitionEnterActive,
            exit: classes.transitionExit,
            exitActive: classes.transitionExitActive
          }}>
          <div onClick={() => setPieces((prev) => {
            const i = prev.indexOf(piece)
            return [...prev.slice(0, i), ...prev.slice(i + 1)]
          })}>Piece #{piece}</div>
        </CSSTransition>)}
      </TransitionGroup>
    </div>
  )
}

export default TransitionGroupLab
