import {
  Copy, Puzzle, CircleUserRound, TriangleAlert, ChevronDown

} from 'lucide-react';
import React, { useState } from 'react'

const CustomPages = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Ecommerce");

  const appmen = [

    {
      label: "Pages", symbol: Copy, submenu: [
        "About Us",
        "Contact Us",
        "Pricing",
        "Empty Page",
        "Timeline",
        "Gallery",
        "FAQ",
        "Sitemap",
        "Search Results",
        "Coming Soon",
        "Privacy Policy",
        "Terms & Conditions",
      ]
    },
    {
      label: "Plugins", symbol: Puzzle, submenu: [
        "Sortable List",
        "PDF Viewer",
        "i18 Support",
        "Sweet Alerts",
        "Idle Timer",
        "Password Meter",
        "Clipboard",
        "Tree View",
        "Masonry",
        "Tour",
        "Animation",
        "Video Player",
      ]
    },
    { label: "Authentication", symbol: CircleUserRound, submenu: ["Basic", "Card", "Split"] },
    {
      label: "Error Pages", symbol: TriangleAlert, submenu: [
        "400 Bad Request",
        "401 Unauthorized",
        "403 Forbidden",
        "404 Not Found",
        "408 Request Timeout",
        "500 Internal Server",
        "Maintenance",
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

export default CustomPages