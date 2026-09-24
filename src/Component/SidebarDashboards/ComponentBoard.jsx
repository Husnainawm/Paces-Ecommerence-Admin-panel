import { 
   Gem, Grid2x2, PieChart, ClipboardList, 
  Table, Shapes, Map, ChevronDown,
  Headphones
} from 'lucide-react';
import React, { useState } from 'react'

const ComponentBoard = () => {

 const [isOpen, setIsOpen] = useState(false)
 const [activeItem, setActiveItem] = useState("Ecommerce");

 const appmen = [

  { label: "Base UI", symbol: Gem, submenu: [
  "Accordions",
  "Alerts",
  "Buttons",
  "Badges",
  "Colors",
  "Breadcrumb",
  "Cards",
  "Carousel",
  "Collapse",
  "Images",
  "Dropdowns",
  "Videos",
  "Grid Options",
  "Links",
  "List Group",
  "Modals",
  "Notifications",
  "Offcanvas",
  "Placeholders",
  "Pagination",
  "Popovers",
  "Progress",
  "Scrollspy",
  "Spinners",
  "Tabs",
  "Tooltips",
  "Typography",
  "Utilities",
] },
  { label: "Widgets", symbol: Grid2x2, submenu: [
  "Charts",
  "Mixed",
  "Social",
  "Statistics",
  "Weather",
] },
  { label: "Charts", symbol: PieChart, submenu: [
  "Apex Charts",
  "Echarts",
  "Chart Js",
] },
  { label: "Forms", symbol: ClipboardList, submenu: [
  "Basic Elements",
  "Validation",
  "Wizard",
  "Select",
  "Pickers",
  "File Uploads",
  "Text Editors",
  "Range Slider",
  "Image Cropper",
  "Layouts",
  "Other Plugins",
] },
  { label: "Tables", symbol: Table, submenu: [
  "Static Tables",
  "Custom Tables",
  "DataTables",
] },
  { label: "Icons", symbol: Shapes, submenu: [
  "Tabler",
  "Lucide",
  "Remix",
  "Solar Duotone",
  "Flags",
] },
  { label: "Maps", symbol: Map, submenu: [
  "Google Maps",
  "Vector Maps",
  "Leaflet Maps",
] },
 ]


  return (
 <>

           {appmen.map((item, i) => (
  <div key={i}>
    <div
      onClick={() => setIsOpen(isOpen === i ? null : i)}
      className="flex items-center justify-between py-2 rounded-lg cursor-pointer text-white"
    >
      <div className="flex items-center gap-3">
        <item.symbol size={18} />
        <span className="text-sm font-medium">{item.label}</span>
      </div>
      <ChevronDown
        size={16}
        className={`transition-transform ${isOpen === i ? 'rotate-180' : ''}`}
      />
    </div>

    {isOpen === i && (
      <div className="flex flex-col pl-10 py-1">
        {item.submenu.map((sub, index) => (
          <span
            key={index}
            onClick={() => setActiveItem(sub)}
            className={`text-sm py-2 cursor-pointer ${
              activeItem === sub
                ? 'text-white font-semibold'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {sub}
          </span>
        ))}
      </div>
    )}
  </div>
  ))}
</>
    
  )

}

export default ComponentBoard