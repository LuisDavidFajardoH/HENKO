import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import Separator from "../separador/divider";
import Footer from "../index/footer/footer";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import HeaderPagina from "../header-pagina/header-pagina";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupIcon from "@mui/icons-material/Group";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ShieldIcon from "@mui/icons-material/Shield";
import AOS from "aos";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import "./diseno.css";

const PorQueElegirnos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "Confidencialidad",
      icon: <ShieldIcon className="icon" />,
      description:
        "Garantizamos la protección de su información financiera y comercial con altos estándares de seguridad y profesionalismo.",
      image: "images/confidencialidad.jpg",
    },
    {
      title: "Capacitación Continua",
      icon: <LightbulbIcon className="icon" />,
      description:
        "Nuestro equipo se mantiene actualizado con las últimas normativas y tecnologías para ofrecerle soluciones modernas y efectivas.",
      image: "images/capacitacion.jpg",
    },
    {
      title: "Excelencia",
      icon: <VerifiedIcon className="icon" />,
      description:
        "Nos enfocamos en ofrecer servicios de la más alta calidad, superando siempre las expectativas de nuestros clientes.",
      image: "images/excelencia.jpg",
    },
    {
      title: "Trabajo en Equipo",
      icon: <GroupIcon className="icon" />,
      description:
        "Fomentamos un entorno de colaboración, trabajando estrechamente con nuestros clientes para lograr sus objetivos financieros.",
      image: "images/equipo.jpg",
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/HENKO.ico" type="image/x-icon" />
        <title>¿Por Qué Elegirnos? - HENKO GKF</title>
        <meta
          name="description"
          content="Descubra por qué HENKO GKF es su mejor aliado financiero. Nos destacamos por nuestra confidencialidad, capacitación continua, excelencia y enfoque en el trabajo en equipo."
        />
        <meta
          name="keywords"
          content="HENKO GKF, confidencialidad, capacitación continua, excelencia, trabajo en equipo, aliados financieros"
        />
      </Helmet>

      <Navbar />
      <HeaderPagina
        titulo="¿Por Qué Elegirnos?"
        imagenFondo="porque.jpg"
      />
      <div className="design-section">
        <Typography
          style={{ marginBottom: "4%" }}
          variant="h4"
          className="section-title"
        >
          ¿Por Qué Elegir HENKO GKF?
        </Typography>
        <Typography
          style={{ marginBottom: "4%" }}
          variant="body1"
          className="section-description"
        >
          En HENKO GKF, nos enorgullece ser el aliado estratégico de las
          empresas, ofreciendo soluciones financieras, contables y tributarias
          con un enfoque en la confidencialidad, la excelencia y el trabajo en
          equipo.
        </Typography>
        <Separator />
        <div className="feature-container">
          {features.map((feature, index) => (
            <div
              className={`feature-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="feature-text">
                <div style={{ fontSize: "0rem" }} className="icon-container">
                  {feature.icon}
                </div>
                <Typography
                  style={{ fontSize: "2rem" }}
                  className="feature-title"
                  gutterBottom
                >
                  {feature.title}
                </Typography>
                <Typography
                  style={{ fontSize: "1rem" }}
                  variant="body2"
                  component="p"
                  className="feature-description"
                >
                  {feature.description}
                </Typography>
              </div>
              <img
                src={feature.image}
                alt={feature.title}
                className="feature-image"
              />
            </div>
          ))}
        </div>
        <Separator />
        <div className="additional-info" data-aos="fade-up">
          <Typography variant="h5" className="additional-title">
            Nuestros Compromisos
          </Typography>
          <Typography variant="body1" className="additional-description">
            Nuestro compromiso con nuestros clientes es brindarles la mejor
            asesoría financiera, contable y tributaria, adaptándonos a sus
            necesidades específicas y construyendo relaciones basadas en la
            confianza y el éxito mutuo.
          </Typography>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default PorQueElegirnos;
