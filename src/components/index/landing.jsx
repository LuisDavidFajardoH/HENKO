// landing prueba
import React from "react";
import Navbar from "../navbar/navbar";
import Header from "./header/header";
import Descripcion from "./descripcion/descripcion";
import Informacion from "./menuEmpresa/menuEmpresa";
import BotonWhatsapp from "./boton-whatsapp/boton-whatsapp";
import Separator from "../separador/divider.jsx";
import { Helmet } from "react-helmet";
import Footer from "./footer/footer";

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>HENKO | Líderes en Soluciones Industriales</title>
        <meta
          name="description"
          content="HENKO es tu aliado en soluciones industriales. Especialistas en diseño y fabricación de estructuras metálicas, equipos especializados y sistemas de seguridad industrial."
        />
        <meta
          name="keywords"
          content="HENKO, soluciones industriales, fabricación especializada, estructuras metálicas, diseño industrial, seguridad industrial, equipamiento industrial, innovación industrial, calidad industrial, proyectos industriales"
        />
      </Helmet>

      <Navbar />
      <Header />
      <Descripcion />
      <Separator />
      <Informacion />      
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Landing;
