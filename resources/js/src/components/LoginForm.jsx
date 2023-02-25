import React from 'react'
import Modal from './Modal'

const LoginForm = ({ closeModal }) => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Modal
      title="Iniciar sesión"
      closeModal={closeModal}
    >
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="username">
            Email o nombre de usuario
          </label>
          <input
            type="text"
            className="border border-dark rounded-full px-4 py-1 focus:no-underline"
            placeholder="Nombre de usuario..."
            name="username"
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            className="border border-dark rounded-full px-4 py-1 focus:no-underline"
            placeholder="Contraseña..."
            name="password"
          />
        </div>
        <div className="flex justify-end gap-1">
          <button
            type="submit"
            className="bg-yellow text-dark text-lg py-[2px] px-4 rounded-full hover:bg-opacity-80"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default LoginForm
