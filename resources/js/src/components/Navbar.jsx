import React from 'react'
import { Link, useHref } from 'react-router-dom'
import useModal from '../hooks/useModal'
import LoginForm from './LoginForm'

const Navbar = () => {
  const { isOpenModal, openModal, closeModal } = useModal()
  const href = useHref()

  return (
    <>
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
          <button
            type="button"
            onClick={openModal}
            className="bg-transparent text-white text-lg border border-white rounded-full py-[2px] px-4 transition-all hover:bg-white hover:text-dark"
          >
            Iniciar sesión
          </button>
        </nav>
      </header>
      {isOpenModal && (
        <LoginForm
          closeModal={closeModal}
         />
      )}
    </>
  )
}

export default Navbar
