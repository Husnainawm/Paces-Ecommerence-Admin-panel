import {
  LayoutPanelTop, PanelLeft, PanelTop, ChevronDown

} from 'lucide-react';
import React, { useState } from 'react'

const Layouts = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Ecommerce");

  const appmen = [

    {
      label: "Layout Options", symbol: LayoutPanelTop, submena: [
        "Horizontal",
        "Boxed",
        "Scrollable",
        "Compact",
        "Preloader",
      ]
    },
    {
      label: "Sidebars", symbol: PanelLeft, submena: [
        "Light Menu",
        "Gradient Menu",
        "Gray Menu",
        "Image Menu",
        "Compact Menu",
        "On Hover Menu",
        "Offcanvas Menu",
        "No Icons with Lines",
        "Sidebar with Lines",
      ]
    },
    {
      label: "Topbar", symbol: PanelTop, submena: [
        "Dark Topbar",
        "Gray Topbar",
        "Gradient Topbar",
      ]
    },

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
      ))}
    </>

  )

}

export default Layouts