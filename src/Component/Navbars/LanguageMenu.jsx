import { useState, useRef, useEffect } from 'react'

import us from '../../assets/Flags/us.svg'
import de from '../../assets/Flags/de.svg'
import it from '../../assets/Flags/it.svg'
import es from '../../assets/Flags/es.svg'
import ru from '../../assets/Flags/ru.svg'
import inFlag from '../../assets/Flags/in.svg'
import sa from '../../assets/Flags/sa.svg'

const languages = [
  { name: 'English', code: 'EN', flag: us },
  { name: 'Deutsch', code: 'DE', flag: de },
  { name: 'Italiano', code: 'IT', flag: it },
  { name: 'Español', code: 'ES', flag: es },
  { name: 'Русский', code: 'RU', flag: ru },
  { name: 'हिन्दी', code: 'HI', flag: inFlag },
  { name: 'عربي', code: 'AR', flag: sa },
]

const LanguageMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(languages[0])
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

  function handleSelect(lang) {
    setSelected(lang)
    setIsOpen(false)   // choose karte hi menu band
  }

  return (
    <div ref={menuRef} className="relative mr-2">
      {/* Button: selected language ka flag + code */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:text-white"
      >
        <img className="h-5 w-5 object-cover rounded-full" src={selected.flag} alt={selected.name} />
        <p className="font-semibold">{selected.code}</p>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-4 w-44 bg-[#1e1f27] border border-gray-800 rounded-lg py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-backCol ${
                selected.code === lang.code ? 'text-white' : 'text-gray-300'
              }`}
            >
              <img className="h-5 w-5 object-cover rounded-full" src={lang.flag} alt={lang.name} />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageMenu