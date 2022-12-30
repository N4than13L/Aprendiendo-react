import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Contacto = () => {
  const dato = useContext(PruebaContext);
  return (
    <div>
      <h1>Contacto</h1>
      <p>Pagina de contacto</p>
      <p>
        Dato compartido: <pre>{JSON.stringify(dato.nombre)}</pre>
      </p>
    </div>
  );
};
