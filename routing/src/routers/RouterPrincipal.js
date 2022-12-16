import React from 'react'
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom'
import { Articulos } from '../componentes/Articulos'
import { Contacto } from '../componentes/Contacto'
import { Error } from '../componentes/Error'
import { Inicio } from '../componentes/Inicio'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <h2>Header</h2>
    <hr/>

    <nav>
        <ul>
            <li><NavLink to='/inicio'>Inicio</NavLink></li>
        </ul>
        <ul>
            <li><a href='/articulos'>Articulos</a></li>
        </ul>
        <ul>
            <li><NavLink to='/contacto'>Contacto</NavLink></li>
        </ul>
    </nav>
    <hr/>

        {/* Cargar el contenido principal de la pagina y este debe coincidir con el path del componente */}

        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            <Route path='/articulos' element={<Articulos/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>

        <hr/>
        <footer>
            Pie de pagina 
        </footer>

    </BrowserRouter>
  )
}
