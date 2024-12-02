import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./Header.css";

const Header = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(ios);
  }, []);

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
            className="background-image desktop-image"
          />
          <img
            src="/images/nosotros.jpg"
            alt="Background HENKO Mobile"
            className="background-image mobile-image"
          />
        </div>
        <div className="content">
          <div className="header-content-wrapper">
            <div className="header-text">
              <h1>HENKO GKF</h1>
              <p>Tu salud financiera en las manos correctas</p>
              <a href="/contactenos" className="btn-primary">
                Contáctanos
              </a>
            </div>
            <div className="logo-background">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="logo-video"
                preload="auto"
                poster="/images/logo-poster.png" /* Añadir un poster como respaldo */
              >
                <source src="/images/LogoV.mp4" type="video/mp4" />
                <source src="/images/LogoV.webm" type="video/webm" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
