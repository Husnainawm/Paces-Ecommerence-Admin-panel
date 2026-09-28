import React, { useState } from 'react'
import Dashboard from '../SidebarDashboards/Dashboard';
import AppsBoard from '../SidebarDashboards/AppsBoard';
import CustomPages from '../SidebarDashboards/CustomPages';
import Layouts from '../SidebarDashboards/Layout';
import ComponentBoard from '../SidebarDashboards/ComponentBoard';
import MenuBoard from '../SidebarDashboards/MenuBoard';
import { Star, CircleX } from 'lucide-react';





const Sidebar = () => {

  return (
    <>
      <div className='w-15 lg:w-61.25 px-5 h-lvh pt-20 pb-20 [&::-webkit-scrollbar]:hidden bg-[#1e1f27] flex flex-col gap-2 overflow-y-auto'>
        <div className='text-sm hidden lg:block'>
          Main
        </div>
        <Dashboard />
        <div className='text-sm pt-1 hidden lg:flex'>
          APPS
        </div>
        <AppsBoard />
        <div className='text-sm pt-1 hidden lg:flex'>
          Custom Pages
        </div>
        <CustomPages />
        <div className='text-sm pt-1 hidden lg:flex'>
          Layouts
        </div>
        <Layouts />
        <div className='text-sm pt-1 hidden lg:flex'>
          Components
        </div>
        <ComponentBoard />
        <div className='text-sm pt-1 hidden lg:flex'>
          Menu
        </div>
        <MenuBoard />
        <div className='h-6 flex items-center gap-5 opacity-60'>
          <CircleX size={24} lg:size={16} />
          <p className='hidden lg:flex'>Disable Menu</p>
        </div>
        <div className='h-10 p-1 text-white lg:p-2 rounded flex items-center gap-5 bg-blueCol '>
          <Star size={24} lg:size={16} />
          <p className='hidden lg:flex'>Special Menu</p>
        </div>
      </div>

    </>
  )
}

export default Sidebar