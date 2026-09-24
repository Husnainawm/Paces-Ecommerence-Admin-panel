import React from 'react'
import Navbarone from './Component/Navbars/Navbar'
import Sidebar from './Component/Navbars/Sidebar'
import Homepage from './Component/Heros/Homepage'

const App = () => {
  return (
    <>
      <div className='bg-black h-full text-textCol w-full'>
        <Navbarone />
        <div className='flex'>
          <Sidebar />
          <Homepage />
        </div>
      </div>

    </>
  )
}

export default App