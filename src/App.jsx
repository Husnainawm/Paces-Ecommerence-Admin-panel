import React from 'react'
import Navbarone from './Component/Navbars/Navbar'
import Sidebar from './Component/Navbars/Sidebar'

const App = () => {
  return (
    <>
      <div className='bg-black h-full text-textCol w-full'>
    <Navbarone/>
    <Sidebar/>
       </div>

    </>
  )
}

export default App