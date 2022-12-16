import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {
    let {nombre, apellido} = useParams()
    let navegar = useNavigate()

    const enviar = (e) => {
        e.preventDefault()
        let nombre = e.target.nombre.value
        let apellido = e.target.apellido.value

        let url = `/persona/${nombre}/${apellido}`
        console.log(url)

        if (nombre.length <= 0 && apellido.length <= 0) {
            console.log("Entrando ando")
            navegar('/inicio')
        }else{
            navegar(url)
        }

        // navegar(url)
    }

  return (
    <div>
        {!nombre && <h1>No hay usuario o persona que mostrar</h1>}
        {nombre && <h1>Pagina de la persona: {nombre} {apellido}</h1>}
        <p>Esta es la pagina de persona </p>


        <form onSubmit={enviar}>
            <input type='text' name='nombre'/>
            <input type='text' name='apellido'/>
            <input type='submit' name='enviar' value='enviar' />
        </form>
    </div>
  )
}
