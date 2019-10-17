import React from 'react'
import useMediaQuery from '../hooks/mediaQuery'

function MediaQueryLab() {
  const portrait = useMediaQuery('(orientation: portrait)')
  const printing = useMediaQuery('print')

  window.addEventListener('beforeprint', event => {
    console.log('Before print')
    console.log(event)
  })

  return (
    <>
      <div>Media orientation: {portrait ? 'portrait' : 'landscape'}</div>
      <div>Printing: {printing ? 'Yes' : 'No'}</div>
      <div>
        Window height: {window.innerHeight} ({window.outerHeight})
      </div>
      <div>
        Window width: {window.innerWidth} ({window.outerWidth})
      </div>
      <div>Screen height: {window.screen.height}</div>
    </>
  )
}

export default MediaQueryLab
