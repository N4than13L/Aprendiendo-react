import React, { useContext } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Acerca } from "../components/Acerca";
import { Articulos } from "../components/Articulos";
import { Contacto } from "../components/Contacto";
import { Login } from "../components/Login";
import { PruebaContext } from "../context/PruebaContext";

export const AppRouting = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);
  return (
    <BrowserRouter>
      {/* Menu de navegacion */}
      <header className="header">
        <nav>
          <div className="logo">
            <h2>Aprendiendo React con useContext</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/acerca">arcerca de</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">articulos</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">contacto</NavLink>
            </li>
            {/* <li><NavLink to='/login'>login</NavLink></li> */}

            {usuario.nombre != null ? (
              <>
                <li>
                  <NavLink to="/">{usuario.nombre}</NavLink>
                </li>
                <li>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setUsuario({nombre: null, apellido: "Bonilla"})
                    }}
                  >
                    Cerrar seion
                  </a>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>

      {/* Configurar rutas */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Error 404!</h1>
              </div>
            }
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
