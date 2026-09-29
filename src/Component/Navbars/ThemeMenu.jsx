import { useState, useRef, useEffect } from 'react'
import { Moon, Sun, SunMoon } from 'lucide-react'

const themes = [
  { label: 'Light', value: 'light', icon: Sun },
  { label: 'Dark', value: 'dark', icon: Moon },
  { label: 'System', value: 'system', icon: SunMoon },
]

const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const menuRef = useRef(null)

  // Bahar click pe band
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Theme badalte hi <html> tag pe "dark" class lagao/hatao
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.toggle('dark', prefersDark)
    } else {
      root.classList.toggle('dark', theme === 'dark')
    }
  }, [theme])

  function handleSelect(value) {
    setTheme(value)
    setIsOpen(false)
  }

  return (
    <div ref={menuRef} className="relative hidden sm:flex">
      <button onClick={() => setIsOpen(!isOpen)} className="px-1.5 hover:text-white">
        <Moon />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-4 w-40 bg-[#1e1f27] border border-gray-800 rounded-lg p-2 z-50">
          {themes.map((t) => {
            const Icon = t.icon
            return (
              <button
                key={t.value}
                onClick={() => handleSelect(t.value)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm hover:bg-backCol ${
                  theme === t.value ? 'bg-backCol text-white' : 'text-gray-400'
                }`}
              >
                <Icon size={16} />
                {t.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ThemeMenu