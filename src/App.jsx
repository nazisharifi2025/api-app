import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element=<Home/> />
        <Route path='/about' element=<About/> />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
