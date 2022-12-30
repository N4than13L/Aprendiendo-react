import React, { useContext } from "react";
import { PruebaContext } from "../context/PruebaContext";

export const Login = () => {

  const {usuario, setUsuario} = useContext(PruebaContext)

  const guardarDatos = (e) => {
    e.preventDefault();
    // alert(e.target.nombre.value);
    let usuario_identificado = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
    };
    
    setUsuario(usuario_identificado)
  };
  return (
    <div>
      <h1>Login</h1>
      <p>Pagina de login</p>

      <form className="login" onSubmit={guardarDatos}>
        <input type="text" name="nombre" placeholder="nombre" />
        <input type="text" name="apellido" placeholder="apellido" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
