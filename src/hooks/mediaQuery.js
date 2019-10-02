import { useState, useEffect } from 'react'

function useMediaQuery(query) {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    function handleOrientationChange(ev) {
      setMatch(ev.matches)
    }
    mediaQueryList.addListener(handleOrientationChange)
    handleOrientationChange(mediaQueryList)
    return () => mediaQueryList.removeListener(handleOrientationChange)
  }, [query])

  return match
}

export default useMediaQuery
