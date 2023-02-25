import React from 'react'
import Layout from '../../layout/Layouts'

const Home = () => {
  return (
    <Layout title='Sonidos Vela - Alquiler de Sonidos y Organización de Eventos'>
      <div className="flex flex-col-reverse justify-between items-center py-16 px-8 gap-16 md:flex-row md:py-32">
        <article className="w-full flex flex-col justify-center items-center gap-4 md:w-3/5">
          <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
            <h1 className="text-yellow font-bold text-center text-2xl mb-2 md:text-2xl">
              <strong className="text-xl font-normal">
                SONIDOS VELA
              </strong>
              <br />
              TU MEJOR OPCIÓN PARA SONIDO Y EVENTOS.
            </h1>
            <p className="text-white text-lg text-center">
              ¡Alquila nuestros equipos y disfruta de la mejor calidad de sonido para tu evento!
            </p>
          </div>
          <button className="bg-yellow text-white font-semibold text-lg rounded-full py-2 px-4 hover:bg-yellow-variant">
            Eventos recientes
          </button>
        </article>
        <img
          src="/images/partying.svg"
          alt="party image"
          className="w-full md:w-2/5"
        />
      </div>
    </Layout>
  )
}

export default Home
