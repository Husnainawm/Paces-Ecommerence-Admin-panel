import React, { useState } from 'react'
import Dashboard from '../SidebarDashboards/Dashboard';
import AppsBoard from '../SidebarDashboards/AppsBoard';
import CustomPages from '../SidebarDashboards/CustomPages';
import Layouts from '../SidebarDashboards/Layout';
import ComponentBoard from '../SidebarDashboards/ComponentBoard';
import MenuBoard from '../SidebarDashboards/MenuBoard';
import { Star, CircleX } from 'lucide-react';





const Sidebar = ({ isOpen, onClose }) => {

  return (
    <>
    {isOpen && (
        <div
          onClick={onClose}
          className='fixed inset-0 bg-black/50 z-55 lg:hidden'
        />
      )}
      <div className={`fixed inset-y-0 left-0 z-60 w-61.25 px-5 h-lvh pt-4 pb-20 lg:pt-20
          [&::-webkit-scrollbar]:hidden bg-[#1e1f27] flex flex-col gap-2 overflow-y-auto
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:static lg:z-auto lg:translate-x-0`}
      >
        <div className='text-sm'>
          Main
        </div>
        <Dashboard />
        <div className='text-sm pt-1 '>
          APPS
        </div>
        <AppsBoard />
        <div className='text-sm pt-1 '>
          Custom Pages
        </div>
        <CustomPages />
        <div className='text-sm pt-1'>
          Layouts
        </div>
        <Layouts />
        <div className='text-sm pt-1'>
          Components
        </div>
        <ComponentBoard />
        <div className='text-sm pt-1'>
          Menu
        </div>
        <MenuBoard />
        <div className='h-6 flex items-center gap-5 opacity-60'>
          <CircleX size={24} lg:size={16} />
          <p className=''>Disable Menu</p>
        </div>
        <div className='h-10 p-1 text-white lg:p-2 rounded flex items-center gap-5 bg-blueCol '>
          <Star size={24} lg:size={16} />
          <p className=''>Special Menu</p>
        </div>
      </div>

    </>
  )
}

export default Sidebar