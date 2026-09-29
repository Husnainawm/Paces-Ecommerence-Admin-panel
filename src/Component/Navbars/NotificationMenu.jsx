import { useState, useRef, useEffect } from 'react'
import { Bell, CloudUpload, CircleAlert, TriangleAlert, Database } from 'lucide-react'

import userImg from '../../assets/user-1.jpg'   // apni alag alag images se replace kar lena

const notifications = [
  {
    name: 'Emily Johnson',
    action: 'commented on a task in',
    target: 'Design Sprint',
    time: '12 minutes ago',
    img: userImg,
    badge: Bell,
    badgeColor: 'bg-emerald-500',
  },
  {
    name: 'Michael Lee',
    action: 'uploaded files to',
    target: 'Marketing Assets',
    time: '25 minutes ago',
    img: userImg,
    badge: CloudUpload,
    badgeColor: 'bg-sky-400',
  },
  {
    name: 'Server #3',
    action: 'CPU usage exceeded 90%',
    time: 'Just now',
    icon: Database,          // photo nahi, icon dikhega
    badge: CircleAlert,
    badgeColor: 'bg-[#f7577e]',
  },
  {
    name: 'Sophia Ray',
    action: 'flagged an issue in',
    target: 'Bug Tracker',
    time: '40 minutes ago',
    img: userImg,
    badge: TriangleAlert,
    badgeColor: 'bg-yellow-400',
  },
]

const unreadCount = 5

const NotificationMenu = () => {
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
      {/* Bell + red count badge */}
      <button onClick={() => setIsOpen(!isOpen)} className="relative px-1.5 hover:text-white">
        <Bell size={22} lg:size={28} strokeWidth={2.5} />
        <span className="absolute -top-2 -right-1 w-4.5 h-4.5 rounded-full bg-redCol text-white text-[10px] font-semibold flex items-center justify-center">
          {unreadCount}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-90 bg-[#1e1f27] border border-gray-800 rounded-lg z-50">
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
            <p className="font-semibold text-gray-200">Notifications</p>
            <span className="text-xs text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-1 rounded">
              07 Notifications
            </span>
          </div>

          {/* List (scrollable) */}
          <div
            className="max-h-80 overflow-y-auto
              [&::-webkit-scrollbar]:w-1
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-thumb]:bg-gray-600
              [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {notifications.map((n) => {
              const Badge = n.badge
              const Icon = n.icon
              return (
                <div key={n.name} className="flex gap-3 px-5 py-3 hover:bg-backCol">
                  {/* Avatar + corner badge */}
                  <div className="relative w-11 h-11 shrink-0">
                    {n.img ? (
                      <img src={n.img} alt={n.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <div className="w-full h-full rounded-full bg-[#2E2D3C] flex items-center justify-center">
                        <Icon size={18} className="text-gray-400" />
                      </div>
                    )}
                    <span
                      className={`absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full flex items-center justify-center ${n.badgeColor}`}
                    >
                      <Badge size={10} className="text-white" />
                    </span>
                  </div>

                  {/* Text */}
                  <div className="text-sm text-gray-400">
                    <p>
                      <span className="text-gray-200 font-medium">{n.name}</span> {n.action}{' '}
                      {n.target && <span className="text-gray-200 font-medium">{n.target}</span>}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{n.time}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-800 py-3 text-center">
            <a href="#" className="text-sm font-medium text-gray-200 underline">
              Read All Messages
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationMenu