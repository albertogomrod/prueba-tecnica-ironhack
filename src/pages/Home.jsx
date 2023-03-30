import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
    <h1 id="titulo">The Phone Cave</h1>
      <h2>
        Tienda de Móviles, Tarifas, Informática, Tecnología online y servicios
        para las personas y el hogar
      </h2>

      <h5>Descubre nuestras ofertas destacadas</h5>
      <button className="buttonHome"><a id="textoBoton" href="/phone-list">Todos nuestros moviles</a></button>
    </div>
  );
}

export default Home;
