import { useState, useEffect } from 'react'
import { Maximize, Minimize } from 'lucide-react'

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    function handleChange() {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener('fullscreenchange', handleChange)
    return () => document.removeEventListener('fullscreenchange', handleChange)
  }, [])

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen() 
      document.exitFullscreen()                  
    }
  }

  return (
    <button onClick={toggleFullscreen} className="px-1.5 hover:text-white hidden sm:flex">
      {isFullscreen ? (
        <Minimize strokeWidth={2.5} />
      ) : (
        <Maximize strokeWidth={2.5} />
      )}
    </button>
  )
}

export default FullscreenToggle