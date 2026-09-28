import { useState, useRef, useEffect } from 'react'
import {
  ChevronDown, ShoppingBasket, MessageSquare, ListChecks, Mail,
  Building2, Contact, CalendarDays, LifeBuoy, Atom, ShoppingCart,
} from 'lucide-react'

const apps = [
  { name: 'eCommerce', desc: 'Products, orders & etc.', icon: ShoppingBasket, color: 'text-blue-500' },
  { name: 'Companies', desc: 'Business profiles', icon: Building2, color: 'text-purple-400' },
  { name: 'Chat', desc: 'Team conversations', icon: MessageSquare, color: 'text-emerald-400' },
  { name: 'Contacts Diary', desc: 'People and connections', icon: Contact, color: 'text-gray-200' },
  { name: 'Task', desc: 'Plan and track work', icon: ListChecks, color: 'text-pink-500' },
  { name: 'Calendar', desc: 'Events and reminders', icon: CalendarDays, color: 'text-yellow-400' },
  { name: 'Email', desc: 'Messages and inbox', icon: Mail, color: 'text-sky-400' },
  { name: 'Support', desc: 'Help and assistance', icon: LifeBuoy, color: 'text-emerald-400' },
]

const AppsMenu = () => {
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2 hover:text-white"
      >
        <p>Apps</p>
        <ChevronDown
          className={`pt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={20}
          strokeWidth={2.25}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-4 w-187.5 flex bg-[#1e1f27] border border-gray-800 rounded-lg overflow-hidden z-50">
          {/* Left side */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 p-6">
              {apps.map((app) => {
                const Icon = app.icon
                return (
                  <a key={app.name} href="#" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-backCol flex items-center justify-center shrink-0">
                      <Icon size={20} className={app.color} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-200 group-hover:text-white">{app.name}</p>
                      <p className="text-xs text-gray-500">{app.desc}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Support / Help */}
            <div className="grid grid-cols-2 border-t border-gray-800 py-4 text-center">
              <div>
                <p className="text-xs text-gray-500">-: SUPPORT :-</p>
                <p className="font-medium text-gray-300 mt-1">help@mydomain.com</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">-: HELP: :-</p>
                <p className="font-medium text-gray-300 mt-1">+(12) 3456 7890</p>
              </div>
            </div>
          </div>

          {/* Right side: promo panel */}
          <div className="w-62.5 bg-linear-to-b from-[#a59bf5] to-[#6f63e8] text-white flex flex-col items-center justify-center text-center px-6">
            <Atom size={30} />
            <p className="text-xs tracking-wider mt-3 opacity-90">LIMITED OFFER</p>
            <p className="text-xl font-semibold mt-4 leading-snug">Unlock Exclusive Savings</p>
            <p className="mt-4">
              <span className="line-through opacity-80">$49.00</span> /{' '}
              <span className="font-semibold">$25 USD</span>
            </p>
            <button className="flex items-center gap-2 bg-redCol text-sm font-medium px-4 py-2 rounded mt-6">
              <ShoppingCart size={14} /> Grab Deal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AppsMenu