import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Inicio = () => {
  const { usuario, setUsuairo } = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>
      <p>
        Nombre: {usuario.nombre} {usuario.apellido}
      </p>
      {/* <p>valor compartido: <strong>{compartida.titulo}</strong></p> */}
    </div>
  );
};
