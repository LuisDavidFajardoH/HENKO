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
        <title>Landing Page - Bienvenidos a Mind | Innovación en Metal</title>
        <meta
          name="description"
          content="Bienvenidos a Mind. Descubre nuestra empresa, misión, visión y portafolio de proyectos. Innovación y soluciones de metal para el sector industrial colombiano."
        />
        <meta
          name="keywords"
          content="Mind, landing page, innovación en metal, proyectos de metal, sector industrial colombiano, misión, visión, portafolio, metalmecánica, corte de metal, doblado de metal, curvado de lámina, perforado, punzonado CNC, soldadura Mig, soldadura Tig, pintura electrostática, transformación del metal"
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
