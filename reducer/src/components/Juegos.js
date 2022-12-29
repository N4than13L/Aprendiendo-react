import React, { useEffect, useReducer } from "react";
import { JuegoReducer } from "./reducer/JuegoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("juegos")) || [];
};

export const Juegos = () => {
  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    const accion = {
      type: "crear",
      payload: juego,
    };

    dispatch(accion);
    console.log(juego);
  };

  const Borrarlo = (id) => {
    const action = {
      type: "borrar",
      payload: id,
    };

    dispatch(action);
  };

  const editar = (e, id) => {
    // console.log(e.target.value, "Editar", id)

    let juego = {
        id,
        titulo: e.target.value,
        descripcion: e.target.value,
      };

      const action = {
        type: "editar",
        payload: id,
      };
  
      dispatch(action);
  }

  return (
    <div>
      <h1>Estos son mis videojuegos.</h1>
      <p>Numero de videojuegos:{juegos.length}</p>

      <h3>Agregar juego</h3>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" placeholder="Titulo del juego" />
        <br />
        <textarea
          name="descripcion"
          placeholder="Descripcion de juego"
        ></textarea>
        <br />
        <input type="submit" value="Guardar" />
      </form>
      <ul>
        {juegos.map((juego) => (
          <li key={juego.id}>
            {juego.titulo} &nbsp;{" "}
            <button onClick={(e) => Borrarlo(juego.id)}>X</button>
            <input type='text' onBlur={e => editar(e, juego.id) }/>
          </li>
        ))}
      </ul>
    </div>
  );
};
