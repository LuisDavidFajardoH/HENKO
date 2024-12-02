import React from "react";
import { Helmet } from "react-helmet";
import { LockOn , BookOpen , Sparkles  } from "akar-icons";
import "./descripcion.css";

const Descripcion = () => {
  return (
    <>
      <Helmet>
        <title>HENKO GKF - Empresa, Misión y Visión</title>
        <meta
          name="description"
          content="Conozca HENKO GKF: Más de 15 años de experiencia en soluciones financieras, contables y tributarias personalizadas. Descubre nuestra misión y visión."
        />
      </Helmet>

      <div className="descripcion-container">
        <div className="empresa">
          <img
            className="imagen1"
            src="/images/letrasColor.png"
            alt="Logo HENKO GKF"
            loading="lazy"
          />
        </div>
        <div className="descripcion">
          <div className="caracteristica">
            <LockOn  strokeWidth={2} size={40} color={"#044a29"} />
            <h2>Confidencialidad</h2>
            <p>
              En HENKO GKF, la confidencialidad tiene un valor incalculable. Nos
              aseguramos de proteger la información sensible de nuestros
              clientes, fomentando confianza y cumpliendo con las normativas
              legales.
            </p>
          </div>
          <div className="caracteristica">
            <BookOpen  strokeWidth={2} size={40} color={"#044a29"} />
            <h2>Capacitación Continua</h2>
            <p>
              Valoramos la capacitación constante de nuestro personal y
              clientes, adaptándonos a un entorno en constante evolución para
              brindar soluciones modernas y efectivas.
            </p>
          </div>
          <div className="caracteristica">
            <Sparkles  strokeWidth={2} size={40} color={"#044a29"} />
            <h2>Excelencia</h2>
            <p>
              Nos comprometemos a ofrecer servicios de alta calidad, superando
              las expectativas a través de la innovación, la empatía y la
              colaboración constante con nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Descripcion;
