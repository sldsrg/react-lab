import React from 'react'
import useMediaQuery from '../hooks/mediaQuery'

function MediaQueryLab() {
  const portrait = useMediaQuery('(orientation: portrait)')
  const printing = useMediaQuery('print')

  return (
    <>
      <div>Media orientation: {portrait ? 'portrait' : 'landscape'}</div>
      <div>Printing: {printing ? 'Yes' : 'No'}</div>
    </>
  )
}

export default MediaQueryLab
