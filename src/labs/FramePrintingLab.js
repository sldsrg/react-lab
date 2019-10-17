import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { createUseStyles } from 'react-jss'

import Printable from '../components/Printable'
import FrameWithJss from '../components/FrameWithJss'

const useStyles = createUseStyles({
  div: {
    backgroundColor: 'lightyellow'
  }
})

function generateData(count) {
  return new Array(count).fill(null).map((item, index) => ({
    name: `Sample item ${index + 1}`,
    price: Math.round(13000 * Math.random()) / 100,
    count: 1 + Math.floor(30 * Math.random())
  }))
}

// The A4 page size is defined as 210mm x 297mm, which is 8.268" x 11.69".
// Since CSS pixels are 96px/inch (as long as we're talking about
// a high-resolution device like a printer -- CSS pixels equal device pixels
// for low-res applications), I think you should be able to rely on the page
// size being 793.7px x 1123px

function FramePrintingLab() {
  const data = useRef(generateData(64))
  const [step, setStep] = useState(0)
  const classes = useStyles()
  const targetRef = useRef()
  const frameRef = useRef()
  const contentRef = useRef()

  function print() {
    frameRef.current.node.contentWindow.print()
  }

  useEffect(() => {
    ReactDOM.render(
      <FrameWithJss ref={frameRef}>
        <Printable ref={contentRef} data={data.current} toStep={step} />
      </FrameWithJss>,
      targetRef.current,
      () => {
        let curHeight = 0
        if (contentRef.current) {
          curHeight = contentRef.current.getBoundingClientRect().height
        }
        // const curHeight = frameRef.current.node.getBoundingClientRect().height
        if (curHeight < 300 && step < 40) setStep(prev => prev + 1)
      }
    )
  }, [step])

  return (
    <>
      <div>
        <input type='button' value='print' onClick={print} />
      </div>
      <div ref={targetRef}></div>
      <div className={classes.div}>
        <Printable data={data.current} />
      </div>
    </>
  )
}

export default FramePrintingLab
