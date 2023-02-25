import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'

const Layout = ({
  children,
  title = ''
}) => {
  useEffect(() => {
    document.title = title

    return () => {
      document.title = ''
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="bg-dark">
        <hr className="bg-dark-variant border-none h-[1px] w-11/12 m-auto" />
        <section className="container py-4">
          {children}
        </section>
      </div>
    </>
  )
}

export default Layout
