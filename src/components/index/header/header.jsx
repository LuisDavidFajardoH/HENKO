import React from "react";
import { Helmet } from "react-helmet";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Helmet>
        <title>Inicio - Tu Aliado Financiero | HENKO GKF</title>
        <meta
          name="description"
          content="HENKO GKF: Más de 15 años asegurando la salud financiera de empresas. Descubre nuestras soluciones en contabilidad, finanzas e impuestos."
        />
        <meta
          name="keywords"
          content="HENKO GKF, asesoría contable, asesoría tributaria, outsourcing contable, revisoría fiscal, cumplimiento tributario"
        />
      </Helmet>

      <header className="header">
        <div className="image-container">
          <img
            src="/images/abstract-blur-hotel-interior.jpg"
            alt="Background HENKO"
            className="background-image"
          />
        </div>
        <div className="content">
          <div className="header-text">
            <h1>HENKO GKF</h1>
            <p>Tu salud financiera en las manos correctas</p>
            <a href="/contactenos" className="btn-primary">
              Contáctanos
            </a>
          </div>
          <div className="logo-background">
            <img src="/images/henkof 3.png" alt="Logo HENKO" className="logo" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
