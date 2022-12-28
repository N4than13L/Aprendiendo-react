import React, { useLayoutEffect,useEffect, useState, useRef} from 'react'

export const EjemploComponente = () => {

    const [mostrar, setMostrar] = useState(false)
    const caja = useRef()
    const boton = useRef()

    useLayoutEffect(() => {
      console.log("useLayoutEffect cargado")
    }, [])

    useEffect(()=>{
        console.log("useEffect cargado")
        if(caja.current == null) return

        const {botom} = boton.current.getBoundingClientRect()

        console.log(boton)

    }, [mostrar])

  return (
    <div>
        <h1>Ejemplo useLayoutEffect y useEffect</h1>

        <button ref={boton} onClick={()=> {
            setMostrar(prev => {
                console.log(prev, !prev)
                return !prev
            })
        } }>Mostrar mensaje</button>
        {
            mostrar && (
                <div ref={caja}>
                    Hola, soy un mensaje {mostrar}
                </div>
            )
        }
    </div>
  )
}
