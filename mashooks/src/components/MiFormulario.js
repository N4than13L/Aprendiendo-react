import React, { useState } from "react";
import { useForm } from "./hook/useForm";

export const MiFormulario = () => {
  const { formulario, cambiado, enviado } = useForm({});

  return (
    <div>
      <h1>Formulario</h1>
      <p>Formulario para guardar un curso.</p>
      <p>
        Curso guardardado: {formulario.titulo}{" "}
        <pre className='codigo'>{JSON.stringify(formulario)}</pre>
      </p>

      <form onSubmit={enviado} className="mi-formulario">
        <input
          type="text"
          name="titulo"
          onChange={cambiado}
          placeholder="Titulo"
        />
        <input
          type="number"
          name="anio"
          onChange={cambiado}
          placeholder="Año de públicacion"
        />
        <textarea
          name="descripcion"
          onChange={cambiado}
          placeholder="descripcion"
        />
        <input
          type="text"
          name="autor"
          onChange={cambiado}
          placeholder="Autor"
        />

        <input
          type="email"
          name="email"
          onChange={cambiado}
          placeholder="Correo de contacto"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
