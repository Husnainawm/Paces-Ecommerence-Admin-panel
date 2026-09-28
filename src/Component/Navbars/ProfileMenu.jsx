import { useState, useRef, useEffect } from 'react'
import {
  ChevronDown, CircleUserRound, BellRing, Settings,
  Headphones, Lock, LogOut,
} from 'lucide-react'

import userImg from '../../assets/user-1.jpg'

const mainItems = [
  { label: 'Profile', icon: CircleUserRound },
  { label: 'Notifications', icon: BellRing },
  { label: 'Account Settings', icon: Settings },
  { label: 'Support Center', icon: Headphones },
]

const bottomItems = [
  { label: 'Lock Screen', icon: Lock },
  { label: 'Log Out', icon: LogOut },
]

// Dono groups ek hi tarah render hote hain, isliye ek chhota helper component
const MenuItem = ({ item }) => {
  const Icon = item.icon
  return (
    <a
      href="#"
      className="flex items-center gap-3 px-3 py-2.5 rounded text-gray-400 hover:text-white hover:bg-backCol"
    >
      <Icon size={18} />
      {item.label}
    </a>
  )
}

const ProfileMenu = () => {
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
    <div ref={menuRef} className="relative">
      {/* Trigger: avatar + naam + role + arrow */}
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <div className="w-10 h-8 pr-2">
          <img className="object-cover rounded-full" src={userImg} alt="David Dev" />
        </div>
        <div className="text-left w-18">
          <h5 className="text-sm">David Dev</h5>
          <p className="text-[12px] hover:text-white">Admin Head</p>
        </div>
        <ChevronDown
          className={`pt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={20}
          strokeWidth={2.25}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-56 bg-[#1e1f27] border border-gray-800 rounded-lg p-2 z-50">
          <p className="px-3 py-2 text-sm font-semibold text-gray-200">
            Welcome back <span>👋</span>!
          </p>

          {mainItems.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}

          {/* Divider */}
          <div className="border-t border-gray-800 my-2" />

          {bottomItems.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProfileMenu