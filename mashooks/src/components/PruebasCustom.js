import React, { useState } from "react";
import { useMayus } from "./hook/useMayus";

export const PruebasCustom = () => {
  const [miTexto, setMiTexto] = useState("Jose Bonilla");
  const { estado, mayusculas, minusculas, concatenar } = useMayus(miTexto);

  return (
    <div>
      <h1>Probando componentes personalizados</h1>
      <h2> {estado}</h2>

      <button onClick={mayusculas}>poner en mayusculas</button>
      <button onClick={minusculas}>poner en minusculas</button>
      <button onClick={e => concatenar(" - Probando hooks personalizados")}>
        concatenar
      </button>
    </div>
  );
};
