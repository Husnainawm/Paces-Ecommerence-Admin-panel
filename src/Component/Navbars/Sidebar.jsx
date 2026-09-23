import React from 'react'
import { 
  Target, ShoppingBag, MessageSquare, Briefcase, ListChecks, 
  FileText, Heart, Users, Wallet, Zap, 
  Mail, Headphones, BadgePercent, LayoutGrid, Copy, 
  Puzzle, CircleUserRound, TriangleAlert, LayoutPanelTop, PanelLeft, 
  PanelTop, Gem, Grid2x2, PieChart, ClipboardList, 
  Table, Shapes, Map, Network, ChevronDown
} from 'lucide-react';
      


const Sidebar = () => {
const menuItems = [
  // MAIN
  { label: "Dashboards", symbol: Target, dropdown: true },

  // APPS
  { label: "Ecommerce", symbol: ShoppingBag, dropdown: true },
  { label: "Chat", symbol: MessageSquare, dropdown: false },
  { label: "Projects", symbol: Briefcase, dropdown: true },
  { label: "Tasks", symbol: ListChecks, dropdown: true },
  { label: "Invoice", symbol: FileText, dropdown: true },
  { label: "CRM", symbol: Heart, dropdown: true },
  { label: "Users", symbol: Users, dropdown: true },
  { label: "Finance", symbol: Wallet, dropdown: true },
  { label: "HRM", symbol: Zap, dropdown: true },
  { label: "Email", symbol: Mail, dropdown: false, badge: "New" },
  { label: "Support Center", symbol: Headphones, dropdown: true },
  { label: "Promo", symbol: BadgePercent, dropdown: true },
  { label: "More Apps", symbol: LayoutGrid, dropdown: true },

  // CUSTOM PAGES
  { label: "Pages", symbol: Copy, dropdown: true },
  { label: "Plugins", symbol: Puzzle, dropdown: true },
  { label: "Authentication", symbol: CircleUserRound, dropdown: true },
  { label: "Error Pages", symbol: TriangleAlert, dropdown: true },

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
    <div className='w-61.25 px-5 h-lvh pt-20 bg-[#1e1f27] flex flex-col gap-4 overflow-y-auto'>
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