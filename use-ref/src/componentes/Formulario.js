import React, { useRef } from 'react'

export const Formulario = () => {

  const nombre = useRef();
  const apellido = useRef();
  const email = useRef();

  const miCaja = useRef();
  
  const mostrar = (e) => {
    e.preventDefault();
    console.log(nombre.current.value, apellido.current.value, email.current.value)
    
    // mi caja 
    console.log(miCaja)

  }

  return (
    <div>
      <h1>Formulario</h1>

      <div ref={miCaja}>
          <h6>Puebas con use ref</h6>
      </div>

      <form onSubmit={mostrar}> 
          <input type="text" placeholder='Nombre' ref={nombre} /><br/>
          <input type="text" placeholder='Apellido' ref={apellido} /><br/>
          <input type="email" placeholder='Correo Electronico' ref={email}/><br/>

          <input type='submit' value='enviar'/>

          <button onClick={ () => nombre.current.select()}>Enfocar nombre</button>
      </form> 
    </div>
  )
}
