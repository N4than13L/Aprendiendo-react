import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from './reducer/JuegoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem("juegos")) || []
}

export const Juegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init)

    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos))
    }, [juegos])

    const conseguirDatosForm = (e) =>{  
        e.preventDefault()

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        }
       
        const accion = {
            type: "crear",
            payload: juego
        }

        dispatch(accion)
        console.log(juego)
    }

  return (
    <div>
        <h1>Estos son mis videojuegos.</h1>
        <p>Numero de videojuegos:{juegos.length}</p>
        <ul>
            {
                juegos.map(juego => (
                    <li>{juego.titulo}</li>
                ))
            }
        </ul>

        <h3>Agregar juego</h3>

        <form onSubmit={conseguirDatosForm}>
            <input type='text' name="titulo" placeholder='Titulo del juego'/>
            <br/>
            <textarea name='descripcion' placeholder='Descripcion de juego'></textarea>
            <br/>
            <input type='submit' value='Guardar'/>
        </form>
    </div>
  )
}
