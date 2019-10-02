import React, { useEffect, useState, useRef } from 'react'

function ResizeObserverLab() {
  const [h1FontSize, setH1FontSize] = useState(2)
  const [pFontSize, setPFontSize] = useState(1)
  const divRef = useRef(null)
  const observer = useRef(null)
  const [width, setWidth] = useState(500)
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    observer.current = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          setH1FontSize(Math.max(1.5, entry.contentBoxSize.inlineSize / 250))
          setPFontSize(Math.max(1, entry.contentBoxSize.inlineSize / 500))
        } else {
          setH1FontSize(Math.max(1.5, entry.contentRect.width / 250))
          setPFontSize(Math.max(1, entry.contentRect.width / 500))
        }
      }
    })
    return () => observer.current.disconnect()
  }, [])

  useEffect(() => {
    if (checked) {
      observer.current.observe(divRef.current)
    } else {
      observer.current.unobserve(divRef.current)
    }
  }, [checked])

  const handleChecked = ev => setChecked(ev.target.checked)

  const handleSlider = ev => setWidth(ev.target.valueAsNumber)

  if (ResizeObserver) {
    return (
      <div ref={divRef} style={{ width }}>
        <form>
          <div>
            <label htmlFor='switch'>Observer enabled:</label>
            <input
              type='checkbox'
              checked={checked}
              onChange={handleChecked}
              id='switch'
              name='switch'
            />
          </div>
          <div>
            <label>Adjust width:</label>
            <input
              onChange={handleSlider}
              type='range'
              value={`${width}`}
              min='300'
              max='900'
              step='100'
            />
          </div>
        </form>
        <h1 style={{ fontSize: `${h1FontSize}rem` }}>So what happened?</h1>
        <p style={{ fontSize: `${pFontSize}rem` }}>
          And remember, don't do anything that affects anything, unless it turns out you were
          supposed to, in which case, for the love of God, don't not do it! Ow, my spirit! I don't
          want to be rescued. You guys aren't Santa! You're not even robots. I've got to find a way
          to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like
          clockwork, every three hours. And those jerks at Social Security stopped sending me
          checks. Now 'I' have to pay 'them'!
        </p>
      </div>
    )
  } else {
    return <div>Resize observer not supported</div>
  }
}

export default ResizeObserverLab
