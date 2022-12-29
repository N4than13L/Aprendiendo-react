import React from 'react'
import {Link, Routes, Route, NavLink, BrowserRouter} from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Acerca } from '../components/Acerca'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Login } from '../components/Login'

export const AppRouting = () => (
    <BrowserRouter>
        {/* Menu de navegacion */}
        <header className='header'>
            <nav>
            <div className='logo'>
                <h2>Aprendiendo React con useContext</h2>
            </div>
                <ul>
                    <li><NavLink to='/'>Inicio</NavLink></li>
                    <li><NavLink to='/acerca'>arcerca de</NavLink></li>
                    <li><NavLink to='/articulos'>articulos</NavLink></li>
                    <li><NavLink to='/login'>login</NavLink></li>
                    <li><NavLink to='/contacto'>contacto</NavLink></li>
                </ul>
            </nav>
        </header>

        {/* Configurar rutas */}
        <section className='content'>
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/articulos' element={<Articulos/>}/>
                <Route path='/acerca' element={<Acerca/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={(
                    <div>
                        <h1>Error 404!</h1>
                    </div>)
                }/>
            </Routes>
        </section>
    </BrowserRouter>
)
