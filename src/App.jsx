import React from 'react'
import Navbarone from './Component/Navbars/Navbar'
import Sidebar from './Component/Navbars/Sidebar'
import Homepage from './Component/Heros/Homepage'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './Component/Products Pages/Products.jsx'
import AddProduct from './Component/Products Pages/AddProduct.jsx'



const App = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className='bg-black h-full text-textCol w-full'>
        <Navbarone onMenuClick={() => setSidebarOpen(true)} />
        <div className='grid grid-cols-1 lg:grid-cols-[245px_auto]'>
          <Sidebar className='' isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/addproduct" element={<AddProduct/>} />
            </Routes>
        </div>
      </div>

    </>
  )
}

export default App