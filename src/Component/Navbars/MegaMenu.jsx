import { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronRight, Minus } from 'lucide-react'

const columns = [
  {
    title: 'Dashboard & Analytics',
    bullet: ChevronRight,
    items: ['Sales Dashboard', 'Marketing Dashboard', 'Finance Overview', 'User Analytics', 'Traffic Insights'],
  },
  {
    title: 'Project Management',
    bullet: Minus,
    items: ['Kanban Workflow', 'Project Timeline', 'Task Management', 'Team Members', 'Assignments'],
  },
  {
    title: 'User Management',
    bullet: ChevronRight,
    items: ['User Profiles', 'Access Control', 'Security Settings', 'User Groups', 'Authentication'],
  },
]

const MegaMenu = () => {
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
        <p>Mega Menu</p>
        <ChevronDown
          className={`pt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          size={20}
          strokeWidth={2.25}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-4 w-187.5 grid grid-cols-3 bg-[#1e1f27] border border-gray-800 rounded-lg overflow-hidden z-50">
          {columns.map((col) => {
            const Bullet = col.bullet
            return (
              <div key={col.title} className="p-6 last:bg-[#191a21]">
                <p className="font-semibold text-gray-200 mb-4">{col.title}</p>
                <ul className="flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white">
                        <Bullet size={14} />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MegaMenu