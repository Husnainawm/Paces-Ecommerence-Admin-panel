import { useState } from 'react'
import { Maximize, Minimize } from 'lucide-react'

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  

  return (
    <button onClick={()=>{ return !document.fullscreenElement ? document.documentElement.requestFullscreen() :document.exitFullscreen() }} className="px-1.5 hover:text-white hidden sm:flex">
      {isFullscreen ? (
        <Minimize strokeWidth={2.5} />
      ) : (
        <Maximize strokeWidth={2.5} />
      )}
      
    </button>
  )
}

export default FullscreenToggle