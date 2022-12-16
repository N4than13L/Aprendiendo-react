import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>404.</h1>
        <strong>Lo siento esta pagina no existe o ha sido eliminada.</strong>
        <br/>
        <Link to="/">Vuelve a la pagina principal.</Link>
    </div>
  )
}
