import { useState, useRef, useEffect } from 'react'
import { LayoutGrid, Target, Calendar, MessageCircle, Folder, Users } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import { FaFigma, FaSlack, FaDropbox } from 'react-icons/fa'

const brand = 'bg-[#252630]'
const app = 'bg-blue-500/15 text-blue-400'

const items = [
  { label: 'Google', icon: FcGoogle, circle: brand },
  { label: 'Figma', icon: FaFigma, circle: brand, color: 'text-pink-400' },
  { label: 'Slack', icon: FaSlack, circle: brand, color: 'text-fuchsia-400' },
  { label: 'Dropbox', icon: FaDropbox, circle: brand, color: 'text-blue-500' },
  { center: true },   // beech wala pink circle
  { label: 'Calendar', icon: Calendar, circle: app },
  { label: 'Chat', icon: MessageCircle, circle: app },
  { label: 'Files', icon: Folder, circle: app },
  { label: 'Team', icon: Users, circle: app },
]

const GridMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className="relative hidden lg:block">
      <button onClick={() => setIsOpen(!isOpen)} className="px-1.5 hover:text-white">
        <LayoutGrid />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-82.5 grid grid-cols-3 gap-2 p-3 bg-[#1e1f27] border border-gray-800 rounded-lg z-50">
          {items.map((item, i) => {
            // Beech wala cell: sirf pink circle, click nahi hota
            if (item.center) {
              return (
                <div key={i} className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-redCol flex items-center justify-center">
                    <Target size={16} className="text-white" />
                  </div>
                </div>
              )
            }

            const Icon = item.icon
            return (
              <a
                key={item.label}
                href="#"
                className="flex flex-col items-center gap-2 py-4 border border-dashed border-gray-700 rounded hover:bg-backCol text-sm text-gray-300 hover:text-white"
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${item.circle}`}>
                  <Icon size={18} className={item.color} />
                </div>
                {item.label}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default GridMenu