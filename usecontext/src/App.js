import { useEffect, useState } from "react";
import "./App.css";
import { PruebaContext } from "./context/PruebaContext";
import { AppRouting } from "./routing/AppRouting";

function App() {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    console.log("useEffect cargado una vez");
    // Cuando se carga
    let usuario_local = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuario_local);
  }, []);

  useEffect(() => {
    console.log("cambio en el objeto de usuario");
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const curso = {
    id: 1,
    titulo: "Master en JavaScript",
    contenido:
      "Mas de 30 horas de contenido para ser un expert@ en esta tecnologia",
  };
  return (
    <div className="App">
      <PruebaContext.Provider
        value={{
          usuario,
          setUsuario,
        }}
      >
        <AppRouting />
      </PruebaContext.Provider>
    </div>
  );
}

export default App;
