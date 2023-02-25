import React from 'react'
import { Link, useHref } from 'react-router-dom'

const Navbar = () => {
  const href = useHref()
  console.log(href)

  return (
    <header className="bg-dark flex justify-between items-center px-8 py-4">
      <Link to="/" className="text-2xl font-bold text-white">
        Sonidos Vela
      </Link>

      <nav className="flex justify-around items-center gap-2">
        <Link to="/" className={`text-white text-lg ${href === '/' && 'underline'} hover:underline`}>
          Inicio
        </Link>
        <Link to="/about" className={`text-white text-lg ${href === '/about' && 'underline'} hover:underline`}>
          Nosotros
        </Link>
        <Link to="/events" className={`text-white text-lg ${href === '/events' && 'underline'} hover:underline`}>
          Eventos
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
