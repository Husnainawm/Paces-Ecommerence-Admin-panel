import React, { useState } from 'react'
import Dashboard from '../SidebarDashboards/Dashboard';
import AppsBoard from '../SidebarDashboards/AppsBoard';
import { 
 Copy, 
  Puzzle, CircleUserRound, TriangleAlert, LayoutPanelTop, PanelLeft, 
  PanelTop, Gem, Grid2x2, PieChart, ClipboardList, 
  Table, Shapes, Map, Network, ChevronDown
} from 'lucide-react';
import CustomPages from '../SidebarDashboards/CustomPages';

      


const Sidebar = () => {
const menuItems = [
  // LAYOUTS
  { label: "Layout Options", symbol: LayoutPanelTop, dropdown: true },
  { label: "Sidebars", symbol: PanelLeft, dropdown: true },
  { label: "Topbar", symbol: PanelTop, dropdown: true },

  // COMPONENTS
  { label: "Base UI", symbol: Gem, dropdown: true },
  { label: "Widgets", symbol: Grid2x2, dropdown: true },
  { label: "Charts", symbol: PieChart, dropdown: true },
  { label: "Forms", symbol: ClipboardList, dropdown: true },
  { label: "Tables", symbol: Table, dropdown: true },
  { label: "Icons", symbol: Shapes, dropdown: true },
  { label: "Maps", symbol: Map, dropdown: true },

  // MENU ITEMS
  { label: "Menu Levels", symbol: Network, dropdown: true },
];
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
        {
            menuItems.map((elem ,idx )=>{
                const Symbol =elem.symbol;
             
                return (
                <div className='flex justify-between hover:text-white' key={idx}>
                    <div className='flex gap-5'> 
                    <Symbol size={18}/> 
                    <p>{elem.label}</p>
                    </div>
                    {elem.dropdown && <ChevronDown size={16} className="" />}
                                                      
                </div>
                )
            })
        }
    </div>

    </>
  )
}

export default Sidebar