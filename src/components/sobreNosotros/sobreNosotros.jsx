import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../index/footer/footer.jsx";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp.jsx";
import HeaderPagina from "../header-pagina/header-pagina.jsx";
import { Helmet } from "react-helmet";
import "./SobreNosotros.css";

const SobreNosotros = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/HENKO.ico" type="image/x-icon" />
        <title>Sobre Nosotros - HENKO GKF | Aliados Financieros</title>
        <meta
          name="description"
          content="Conozca más sobre HENKO GKF, una firma con más de 15 años de experiencia en soluciones financieras, contables y tributarias. Comprometidos con la excelencia y confidencialidad."
        />
        <meta
          name="keywords"
          content="HENKO GKF, sobre nosotros, soluciones financieras, contabilidad, impuestos, empresa"
        />
      </Helmet>

      <Navbar />
      <section className="sobrenosotros">
        <HeaderPagina
          titulo="Sobre Nosotros"
          imagenFondo="nosotros.jpg"
        />
        <div className="side-images-container">
          <img
            className="side-image"
            src="/images/left.jpeg"
            alt="Imagen lateral izquierda"
          />
          <section className="sobrenosotros-info">
            <h2>Sobre Nosotros</h2>
            <p>
              HENKO GKF es una firma con más de 15 años de experiencia,
              especializada en ofrecer soluciones integrales en finanzas,
              contabilidad e impuestos. Trabajamos con más de 30 empresas en
              sectores clave, tanto a nivel nacional como internacional,
              destacándonos por nuestra excelencia, confidencialidad y enfoque
              en la capacitación continua.
            </p>
            <h2>Compromiso con Nuestros Clientes</h2>
            <p>
              Nuestro enfoque está en personalizar cada proceso para satisfacer
              las necesidades de nuestros clientes. Nos comprometemos a ser su
              aliado estratégico, promoviendo su crecimiento financiero y
              asegurando el cumplimiento normativo.
            </p>
          </section>
          <img
            className="side-image"
            src="/images/derecha.jpg"
            alt="Imagen lateral derecha"
          />
        </div>
        <section className="sobrenosotros-reconocimiento">
          <h2 className="reconocimiento-titulo">Reconocimiento a Nuestro Equipo</h2>
          <div className="reconocimiento-grid">
            <div className="reconocimiento-item">
              <img src="/images/foto.jpg" alt="Giovanna Rivera Corrales" />
              <h1>Giovanna Rivera Corrales</h1>
              <p>Socia Fundadora</p>
            </div>
            <div className="reconocimiento-item">
              <img src="/images/foto.jpg" alt="Karen Aguirre Perdomo" />
              <h1>Karen Aguirre Perdomo</h1>
              <p>Socia Fundadora</p>
            </div>
          </div>
        </section>
      </section>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default SobreNosotros;
