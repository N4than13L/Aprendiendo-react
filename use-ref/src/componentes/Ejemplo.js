import React, {useEffect, useRef, useState} from 'react'

export const Ejemplo = () => {

    const [ numeroSaludo, setNumeroSaludo ] = useState(0) 

    const saludosEnCola = useRef(numeroSaludo)

    const enviarSaludo = (e) => {
        setNumeroSaludo(numeroSaludo + 1)
    }

    useEffect(() => {
        saludosEnCola.current = numeroSaludo
        setTimeout(() =>{
            console.log("mensajes en cola:"+saludosEnCola.current)
        },2000)
    }, [numeroSaludo])

  return (
    <div>
        <h2>Ejemplo con useref</h2>


        <h3>Saudos enviados. {numeroSaludo}</h3>
        <button onClick={enviarSaludo}>Enviar saludo</button>
    </div>
  )
}
