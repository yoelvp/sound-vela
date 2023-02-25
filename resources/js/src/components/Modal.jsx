import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, title, closeModal }) => {
  return createPortal(
    <>
      <section className="fixed top-0 left-0 bg-black bg-opacity-50 h-screen w-screen overflow-hidden flex justify-center items-center">
        <div className="rounded-lg bg-white p-4">
          <article className="flex justify-between items-center gap-8 mb-4">
            <p className="text-lg font-bold">
              {title}
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="bg-dark w-8 h-8 text-white font-bold rounded-full flex justify-center items-center hover:bg-opacity-80"
            >
              X
            </button>
          </article>
          <div>
            {children}
          </div>
        </div>
      </section>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
