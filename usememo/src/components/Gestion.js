import React, { useState, useRef, useEffect } from "react";
import { Empleados } from "./Empleados";

export const Gestion = () => {
  const [nombre, setNombre] = useState("");

//   const gestor = useRef()

  const asignarGestor = (e) => {
    setNombre(e.target.value)
  }

  useEffect(()=>{
    console.log("vista actualizada otra vez")
  })

  return (
    <div>
      <h1>Nombre el Jefe/Gestor :{nombre}</h1>

      <input type="text" onChange={asignarGestor} placeholder="pon tu nombre "/>

      <h2>Listado de empleados</h2>

      <p>
        Los usuarios son administrados por {nombre} y del api jsonplaceholder.
      </p>

      <Empleados />
    </div>
  );
};
