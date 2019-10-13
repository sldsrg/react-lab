import React, { useRef, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { createUseStyles } from 'react-jss'

import Printable from './Printable'

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
  const frameRef = useRef(null)

  function print() {
    frameRef.current.contentWindow.print()
  }

  useEffect(() => {
    const frameDoc = frameRef.current.contentDocument
    const root = frameDoc.createElement('div')
    const prev = frameDoc.body.firstChild
    if (prev) frameDoc.body.replaceChild(root, prev)
    else frameDoc.body.appendChild(root)
    ReactDOM.render(<Printable data={data.current} toStep={step} />, root, () => {
      const curHeight = root.getBoundingClientRect().height
      console.log(curHeight)
      if (curHeight < 300) setStep(prev => prev + 1)
    })
  }, [step])

  return (
    <>
      <div>
        <input type='button' value='print' onClick={print} />
      </div>
      <div>
        <iframe title='printing' ref={frameRef} />
      </div>
      <div className={classes.div}>
        <Printable data={data.current} />
      </div>
    </>
  )
}

export default FramePrintingLab
