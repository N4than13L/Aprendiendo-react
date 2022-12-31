import React, { useState } from "react";
import { useAjax } from "./hook/useAjax";

export const MiUsuario = () => {
  const [url, setUrl] = useState("https://reqres.in/api/users/1");
  const { datos, cargando } = useAjax(url);

  const getId = (e) => {
    let id = parseInt(e.target.value);
    // let url = "https://reqres.in/api/users/" + id;
    setUrl("https://reqres.in/api/users/" + id);
  };

  return (
    <div>
      <h1>Mi Usuario</h1>
      <p>datos del usuario: </p>
      <p>{cargando ? "Cargando..." : " "}</p>
      <p>
        {datos?.first_name} {datos?.last_name}
      </p>

      <input type="number" name="id" onChange={getId} />
    </div>
  );
};
