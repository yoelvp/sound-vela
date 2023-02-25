import React from 'react'
import Layout from '../../layout/Layouts'

const Home = () => {
  return (
    <Layout title='Sonidos Vela - Alquiler de Sonidos y Organización de Eventos'>
      <div className="flex justify-between items-center py-32 gap-16">
        <article className="w-3/5 flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl text-yellow font-bold text-center mb-2">
              SONIDOS VELA
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
          className="w-2/5"
        />
      </div>
    </Layout>
  )
}

export default Home
