import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import Navbar from "../navbar/navbar";
import Footer from "../index/footer/footer";
import HeaderPagina from "../header-pagina/header-pagina";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import { Helmet } from "react-helmet";
import "./contacto.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contacto = () => {
  const [state, handleSubmit] = useForm("manyleoy");

  if (state.succeeded) {
    return (
      <>
        <Navbar />
        <HeaderPagina titulo="Contáctenos" imagenFondo="contacto.jpg" />
        <div className="success-message">
          <h2>¡Gracias por contactarnos!</h2>
          <p>Nos pondremos en contacto con usted pronto.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contáctenos - HENKO GKF | Soluciones Financieras</title>
        <meta
          name="description"
          content="Póngase en contacto con HENKO GKF. Estamos aquí para atender sus necesidades financieras y contables."
        />
      </Helmet>
      <Navbar />
      <HeaderPagina titulo="Contáctenos" imagenFondo="contacto.jpg" />
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <div className="info-item">
            <FaPhone />
            <p>+57 310 000 0000</p>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <p>contacto@henkogkf.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <p>Bogotá, Colombia</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              id="nombre"
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="form-group">
            <input
              id="telefono"
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              required
            />
          </div>

          <div className="form-group">
            <select name="servicio" id="servicio" required>
              <option value="">Seleccione un servicio</option>
              <option value="Estados Financieros">Estados Financieros</option>
              <option value="Informes Especializados">Informes Especializados</option>
              <option value="Declaraciones de Renta">Declaraciones de Renta</option>
              <option value="Planeación Tributaria">Planeación Tributaria</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje"
              rows="5"
              required
            />
            <ValidationError prefix="Message" field="mensaje" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>

      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Contacto;
