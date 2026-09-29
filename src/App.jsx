import React from 'react'
import Navbarone from './Component/Navbars/Navbar'
import Sidebar from './Component/Navbars/Sidebar'
import Homepage from './Component/Heros/Homepage'
import { useState } from 'react'


const App = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className='bg-black h-full text-textCol w-full'>
        <Navbarone onMenuClick={() => setSidebarOpen(true)} />
        <div className='flex'>
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <Homepage />  
        </div>
      </div>

    </>
  )
}

export default App