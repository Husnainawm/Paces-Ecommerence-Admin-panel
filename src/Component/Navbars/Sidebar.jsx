import React, { useState } from 'react'
import Dashboard from '../SidebarDashboards/Dashboard';
import AppsBoard from '../SidebarDashboards/AppsBoard';
import CustomPages from '../SidebarDashboards/CustomPages';
import Layouts from '../SidebarDashboards/Layout';
import ComponentBoard from '../SidebarDashboards/ComponentBoard';
import MenuBoard from '../SidebarDashboards/MenuBoard';

      


const Sidebar = () => {

  return (
    <>

    

    <div className='w-61.25 px-5 h-lvh pt-20 bg-[#1e1f27] flex flex-col gap-2 overflow-y-auto'>
      <div className='text-sm'>
        Main
      </div>
      <Dashboard/>
      <div className='text-sm pt-1'>
        APPS
      </div>
      <AppsBoard/>
      <div className='text-sm pt-1'>
        Custom Pages
      </div>
      <CustomPages/>
      <div className='text-sm pt-1'>
        Layouts
      </div>
      <Layouts/>
       <div className='text-sm pt-1'>
        Components
      </div>
      <ComponentBoard/>
      <div className='text-sm pt-1'>
        Menu
      </div>
      <MenuBoard/>
    </div>

    </>
  )
}

export default Sidebar