import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../index/footer/footer";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import HeaderPagina from "../header-pagina/header-pagina";
import Separator from "../separador/divider";
import { Helmet } from "react-helmet";
import "./contacto.css";

const ContactUs = () => {
  const handleButtonClick = () => {
    window.open("https://api.whatsapp.com/send?phone=573112897588&text=%C2%A1Hola!%0AQuiero%20cotizar%20un%20proyecto", "_blank");
  };

  const handleMapClick = () => {
    window.open("https://maps.app.goo.gl/buwh5rRUzwBGFWfX8", "_blank");
  };

  return (
    <>
      <Helmet>
      <link rel="icon" href="/images/MIND.ico" type="image/x-icon" />
        <title>Contacto | MIND SAS BIC</title>
      </Helmet>
      <Navbar />
      <HeaderPagina titulo="Contacto" imagenFondo="contactenos.jpg" />
      <div className="contact-us-container">
        <h1 className="greeting">¡Hola!</h1>
        <p className="description" style={{alignItems:""}} >
          En MIND SAS BIC, con más de 25 años de experiencia en el sector metalmecánico colombiano, 
          diseñamos y desarrollamos soluciones a partir de sus necesidades. Con una capacidad 
          productiva avanzada y un sistema de gestión de calidad certificado según la ISO 9001:2015 
          por Bureau Veritas Certification, estamos listos para transformar sus ideas en realidad.
        </p>
        <img src="/images/contactanos.jpg" alt="Imagen descriptiva" className="descriptive-image" />
        <Separator />
        <div className="cta">
          <button className="cta-buttonC" onClick={handleButtonClick}>Empecemos</button>
        </div>
        <div className="contact-info-container">
          <div className="contact-info">
            <div className="contact-detail">
              <h4>CONTACTO</h4>
              <p>info@metalmindsa.com</p>
              <p>(+57) 311 289 7588</p>
            </div>
            <div className="address-detail">
              <h4>UBICACIÓN</h4>
              <p>Av. Américas Calle 20 # 39 – 35</p>
              <p>Bogotá D.C. – Colombia</p>
            </div>
          </div>
        </div>
        <div className="map-container">
          <img
            src="/images/mapa.png"
            alt="Mapa"
            className="map-image"
            onClick={handleMapClick}
          />
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default ContactUs;
