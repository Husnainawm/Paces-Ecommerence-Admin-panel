import { ChevronDown, Target } from 'lucide-react';
import React, { useState } from 'react'

const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Ecommerce");



  const dashboardItem = {
    label: "Dashboards",
    icon: Target,
    submenu: ["Ecommerce", "Analytics", "CRM", "Finance", "Projects"]
  };



  return (


    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between py-2 rounded-lg cursor-pointer text-white"
      >
        <div className="flex items-center gap-5">
          <dashboardItem.icon size={18} />
          <span className="text-sm font-medium">{dashboardItem.label}</span>
        </div>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="flex flex-col pl-10 py-1">
          {dashboardItem.submenu.map((sub, index) => (
            <span
              key={index}
              onClick={() => setActiveItem(sub)}
              className={`text-sm py-2 cursor-pointer ${activeItem === sub
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

  )
}

export default Dashboard