const links = ['About', 'Support', 'Contact Us']

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-6 mt-4 py-4 border-t border-gray-800 bg-[#1a1b23] text-sm text-gray-400 ">
      <p>
        {new Date().getFullYear()} © Paces - By{' '}
        <a href="#" className="font-semibold text-gray-300 underline">
          CODERTHEMES
        </a>
      </p>

      <div className="flex gap-5">
        {links.map((link) => (
          <a key={link} href="#" className="hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer