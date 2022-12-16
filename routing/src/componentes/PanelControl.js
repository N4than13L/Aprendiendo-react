import React from 'react'
import { Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel Control</h1>
        <h3>Elige una de estas opciones.</h3>
        <nav>
            <ul>
                <li><a href='/panel/inicio'>Inicio</a></li>
            </ul>
            <ul>
                <li><a href='/panel/crear-articulo'>Crear articulo</a></li>
            </ul>
            <ul>
                <li><a href='/panel/gestion-usuarios'>Gestion de usuarios</a></li>
            </ul>
            <ul>
                <li><a href='/panel/acerca'>Acerca de</a></li>
            </ul>
        </nav>

        <div>
            {/* Aquí deseo mis rutas del panel secundario. */}
            <Outlet/>
        </div>
    </div>
  )
}
