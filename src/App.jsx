import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import Tienda from './pages/Tienda'
import Categorias from './pages/Categorias'
import Buscar from './pages/Buscar'


const App = () => {
  const [carrito, setCarrito] = useState()
  return (
    
    <BrowserRouter>
    <Header carrito={carrito} setCarrito={setCarrito}/>
    <Routes>
    <Route path="/" element={<Inicio/>} />
    <Route path="/inicio" element={<Inicio/>} />
    <Route path="/tienda" element={<Tienda carrito={carrito} setCarrito={setCarrito}/>} />
    <Route path="/categorias/:id" element={<Categorias carrito={carrito} setCarrito={setCarrito}/>} />
    <Route path="/buscar" element={<Buscar carrito={carrito} setCarrito={setCarrito}/>} />

    </Routes>
    <Footer/>
    
    
    </BrowserRouter>
  )
}

export default App