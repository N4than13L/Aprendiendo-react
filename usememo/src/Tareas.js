import React, {useState, useMemo} from 'react'

export const Tareas = () => {
    const [tareas, setTareas] = useState([])
    const [contador, setContador] = useState(1230)

    const guardarTarea = (e) => {
        e.preventDefault()
        let tareas_actualizadas =  [...tareas, e.target.descripcion.value]
        setTareas(tareas_actualizadas)
    }

    const borrarTarea = (id) => {
        // filtrar las tareas para borrar la que no quiero.
        let nuevas_tareas = tareas.filter((tarea, indice) => indice !== id)
    
        // Guardar el nuevo estado de tareas en el estado (setState).
        setTareas(nuevas_tareas)
    }

    const sumarContador = (e) => {
        setContador(contador + 1)
    }

    const contadoresPasados = (acumumlacion) =>{
        for (let i = 0; i <= acumumlacion; i++) {
            console.log("ejecucucion de contadores del pasado...")
            console.log("se sumo " +i+"al contador de hoy")
        }

        return `Contador de tareas manual: ${contador}`
    }

    const contadorMemo = useMemo(() => contadoresPasados(contador), [contador])

  return (
    <div>
        <h1>Tareas</h1>

        <form onSubmit={guardarTarea}>
            <input 
            type='text' 
            name='descripcion' placeholder='pon la descripcion de tu tarea'/>

            <input type="submit" value="guardar"/>
        </form>

        {/* <h3> {contadorMemo} </h3> */}
        <button onClick={sumarContador}>Sumar</button>

        <h3>Listado de tareas.</h3>
        <ul>
            {
                tareas.map((tarea, indice) => {
                    return (<li key={indice}> {tarea} <button onClick={() =>borrarTarea(indice)}>X</button> </li> )
                })
            }
        </ul>
    </div>
  )
}
