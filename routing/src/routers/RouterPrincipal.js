import React from 'react'
import { Route, Routes, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import { Articulos } from '../componentes/Articulos'
import { Contacto } from '../componentes/Contacto'
import { Error } from '../componentes/Error'
import { Inicio } from '../componentes/Inicio'
import { InicioPanel } from '../componentes/panel/InicioPanel'
import { PanelControl } from '../componentes/PanelControl'
import { Persona } from '../componentes/Persona'

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    <h2>Header</h2>
    <hr/>
    <nav>
        <ul>
            <li><NavLink to='/inicio' className={({isActive}) => isActive ? "activado" : ""} >Inicio</NavLink></li>
        </ul>
        <ul>
            <li><a href='/articulos' className={({isActive}) => isActive ? "activado" : ""} >Articulos</a></li>
        </ul>
        <ul>
            <li><NavLink to='/contacto' className={({isActive}) => isActive ? "activado" : ""} >Contacto</NavLink></li>
        </ul>

        <ul>
            <li><NavLink to='/panel' className={({isActive}) => isActive ? "activado" : ""} >Panel de control</NavLink></li>
        </ul>
    </nav>
    <hr/>

        {/* Cargar el contenido principal de la pagina y este debe coincidir con el path del componente */}

        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/articulos' element={<Articulos/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path={'/persona/:nombre/:apellido'} element={<Persona/>} />
            <Route path={'/persona/:nombre'} element={<Persona/>} />
            <Route path={'/persona/'} element={<Persona/>} />

            <Route path={'/redirigir'} element={<Navigate to={'/persona/Nataniel/Bonilla'}/>}/>

            <Route path={'/panel/*'} element={<PanelControl/>}>
                <Route path='inicio' element={<InicioPanel/>}/>
            </Route>         

            <Route path='*' element={<Error/>}/>
        </Routes>

        <hr/>
        <footer>
            Pie de pagina 
        </footer>

    </BrowserRouter>
  )
}
