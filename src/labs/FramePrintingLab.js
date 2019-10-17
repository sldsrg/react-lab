import React, { useRef, useState, useEffect } from 'react'
import { render } from 'react-dom'
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
  const [offset, setOffset] = useState(0)
  const pages = useRef([])
  const classes = useStyles()
  const targetRef = useRef()
  const frameRef = useRef()
  const contentRef = useRef()

  function print() {
    render(
      <FrameWithJss ref={frameRef}>
        <div className='page'>
          {pages.current.map(([offset, step], index) => {
            return (
              <Printable
                key={offset}
                data={data.current}
                pageNo={index + 1}
                pagesTotal={pages.current.length}
                fromStep={offset}
                toStep={step}
              />
            )
          })}
        </div>
      </FrameWithJss>,
      targetRef.current,
      frameRef.current.node.contentWindow.print
    )
  }

  useEffect(() => {
    // TODO: render all pages together (i.e. calculate and print in one step)
    // TODO: render fragment outside of screen
    render(
      <FrameWithJss ref={frameRef}>
        <Printable ref={contentRef} data={data.current} fromStep={offset} toStep={step} />
      </FrameWithJss>,
      targetRef.current,
      () => {
        let curHeight = 0
        if (contentRef.current) {
          curHeight = contentRef.current.getBoundingClientRect().height
        }
        if (step > data.current.length) {
          pages.current.push([offset, step])
          return
        } else if (curHeight < 400) {
          // TODO: compare to real height
          setStep(prev => prev + 1)
        } else {
          pages.current.push([offset, step])
          setOffset(step)
        }
      }
    )
  }, [step, offset])

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
