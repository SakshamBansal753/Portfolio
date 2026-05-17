import React from 'react'
import { navLinks } from '../../constants'

const Navbar = () => {
  return (
   <nav
  className="
    navbar
    fixed top-0 left-1/2 z-50
    w-full
    -translate-x-1/2
    px-8 py-6
    opacity-0
  "
>
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/diamond.png"
            alt="logo"
            className="w-10"
          />

          <p className="text-white">
            Saksham Bansal
          </p>
        </a>

        {/* Nav Links */}
        <ul className="flex items-center gap-3">

          {navLinks.map((link) => (
            <li key={link.id}>

              <a
                href={`#${link.id}`}
                className="
                  rounded-full 
                  text-2xl text-white px-4 py-2
                  transition-all duration-300
                  hover:bg-white/10
                  hover:text-gray-200
                  hover:backdrop-blur-md
                "
              >
                {link.title}
              </a>

            </li>
          ))}

        </ul>

      </div>
    </nav>
  )
}

export default Navbar