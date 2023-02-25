import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Events from '../pages/events/Events'
import About from '../pages/about/About'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  )
}

export default Router
