import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../index/footer/footer.jsx";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./servicios.css";
import HeaderPagina from "../header-pagina/header-pagina.jsx";
import { Helmet } from "react-helmet";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Configuración necesaria para accesibilidad

const services = [
  {
    title: "Estados Financieros",
    description:
      "Preparación y análisis de estados financieros bajo normativas nacionales e internacionales.",
    modalDescription:
      "Realizamos la preparación de estados financieros para que su empresa cumpla con los estándares contables locales e internacionales (NIIF). Además, ofrecemos análisis detallados para ayudar a tomar decisiones informadas sobre la salud financiera de su empresa.",
  },
  {
    title: "Informes Especializados",
    description:
      "Elaboración de informes financieros y gerenciales personalizados según sus necesidades.",
    modalDescription:
      "Elaboramos informes financieros y gerenciales adaptados a las necesidades de su negocio. Nuestros informes le brindarán una visión clara y detallada para la toma de decisiones estratégicas.",
  },
  {
    title: "Declaraciones de Renta",
    description:
      "Asesoría y preparación de declaraciones de renta para personas naturales y jurídicas.",
    modalDescription:
      "Le ofrecemos asesoría y preparación de su declaración de renta. Nuestro equipo garantiza el cumplimiento de las normativas tributarias, maximizando los beneficios fiscales aplicables.",
  },
  {
    title: "Planeación Tributaria",
    description:
      "Diseño de estrategias fiscales para optimizar su carga tributaria dentro del marco legal.",
    modalDescription:
      "Diseñamos estrategias fiscales a la medida para optimizar su carga tributaria y garantizar el cumplimiento de las normativas legales vigentes.",
  },
  {
    title: "Cumplimiento Tributario",
    description:
      "Supervisión del cumplimiento de obligaciones fiscales para evitar sanciones.",
    modalDescription:
      "Supervisamos y gestionamos sus obligaciones fiscales para evitar sanciones y garantizar el cumplimiento legal en sus procesos tributarios.",
  },
  {
    title: "Nómina y Seguridad Social",
    description:
      "Gestión integral de nómina y liquidaciones, cumpliendo con la normatividad vigente.",
    modalDescription:
      "Gestionamos todos los aspectos relacionados con la nómina de su empresa, incluyendo liquidaciones, reportes y cumplimiento de normatividad en seguridad social.",
  },
  {
    title: "Revisoría Fiscal",
    description:
      "Auditoría y revisión financiera para garantizar la transparencia de su negocio.",
    modalDescription:
      "Ofrecemos servicios de revisoría fiscal para garantizar la transparencia y cumplimiento normativo en sus operaciones financieras.",
  },
  {
    title: "Asesoría Contable",
    description:
      "Consultoría en contabilidad para mejorar la gestión y control de sus finanzas.",
    modalDescription:
      "Le ayudamos a organizar y mejorar la contabilidad de su empresa, asegurando registros precisos y eficientes para la toma de decisiones.",
  },
  {
    title: "Outsourcing Contable",
    description:
      "Externalice su contabilidad con nosotros para optimizar sus recursos internos.",
    modalDescription:
      "Nuestro servicio de outsourcing contable le permite externalizar la gestión de su contabilidad, optimizando tiempo y recursos para que pueda enfocarse en su negocio.",
  },
  {
    title: "Asesoría Tributaria",
    description:
      "Orientación profesional para cumplir con la normatividad tributaria vigente.",
    modalDescription:
      "Proveemos asesoría tributaria profesional para garantizar el cumplimiento de normativas fiscales y aprovechar al máximo las ventajas fiscales disponibles.",
  },
  {
    title: "Otros Servicios",
    description:
      "Otros servicios financieros y administrativos adaptados a las necesidades de su empresa.",
    modalDescription:
      "Además de nuestros servicios principales, ofrecemos soluciones personalizadas en finanzas y administración para satisfacer las necesidades únicas de su empresa.",
  },
  // mejor servicio
  {
    title: "Asesoría Financiera",
    description:
      "Orientación profesional para la toma de decisiones financieras estratégicas.",
    modalDescription:
      "Ofrecemos asesoría financiera especializada para ayudarle a tomar decisiones estratégicas que impulsen el crecimiento y la rentabilidad de su empresa.",
  
  }
];

const ServiciosComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/HENKO.ico" type="image/x-icon" />
        <title>Servicios - HENKO GKF | Soluciones Financieras</title>
        <meta
          name="description"
          content="Descubra los servicios financieros, contables y tributarios que HENKO GKF ofrece para optimizar la gestión de su empresa."
        />
        <meta
          name="keywords"
          content="HENKO GKF, servicios financieros, contables, tributarios, asesoría, revisoría fiscal"
        />
      </Helmet>
      <Navbar />
      <HeaderPagina
        titulo="Nuestros Servicios"
        imagenFondo="servicios.jpg"
      />
      <div className="container">
        <h2 className="section-title2">Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="flip-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              onClick={() => openModal(service)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="flip-card-back">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Información del Servicio"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedService && (
          <div className="modal-content">
            <div className="modal-header">
              <h2 style={{ color: "white" }}>{selectedService.title}</h2>
            </div>
            <div className="modal-body">
              <p>{selectedService.modalDescription}</p>
            </div>
            <div className="modal-footer">
              <p className="modal-cta">
                ¡Cotice hoy y vea cómo nuestros servicios de calidad pueden
                llevar su proyecto al siguiente nivel!
              </p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </Modal>

      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default ServiciosComponent;
