import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Helmet } from "react-helmet";
import "./menuEmpresa.css";

const Informacion = () => {
  const [activeTab, setActiveTab] = useState("empresa");

  const renderContent = () => {
    switch (activeTab) {
      case "empresa":
        return (
          <div key="empresa">
            <h2>NUESTRA EMPRESA</h2>
            <p className="p2">
              En HENKO GKF somos una firma con más de 15 años de experiencia,
              especializada en ofrecer soluciones integrales en finanzas,
              contabilidad e impuestos. Trabajamos con más de 30 empresas en
              sectores clave tanto a nivel nacional como internacional,
              destacándonos por nuestro compromiso con la calidad y la
              confidencialidad.
            </p>
          </div>
        );
      case "mision":
        return (
          <div key="mision">
            <h2>NUESTRA MISIÓN</h2>
            <p className="p2">
              Ser el aliado estratégico de las empresas, ofreciendo soluciones
              integrales en finanzas, contabilidad e impuestos para garantizar
              su salud financiera y promover el crecimiento sostenible. Nuestro
              compromiso radica en personalizar cada proceso para satisfacer las
              necesidades de nuestros clientes.
            </p>
          </div>
        );
      case "vision":
        return (
          <div key="vision">
            <h2>NUESTRA VISIÓN</h2>
            <p className="p2">
              Ser líderes innovadores y proactivos, anticipándonos a los
              desafíos financieros de nuestros clientes, ofreciendo soluciones
              creativas y efectivas que los dirijan hacia un futuro financiero
              sólido y próspero, construyendo relaciones de confianza y éxito
              mutuo.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/HENKO.ico" type="image/x-icon" />
        <title>Información - Nuestra Empresa, Misión y Visión | HENKO GKF</title>
        <meta
          name="description"
          content="Conozca más sobre HENKO GKF: nuestra empresa, misión y visión. Líderes en soluciones integrales para finanzas y contabilidad."
        />
        <meta
          name="keywords"
          content="HENKO GKF, empresa, misión, visión, finanzas, contabilidad, impuestos"
        />
      </Helmet>

      <div className="informacion-container">
        <div className="tabs">
          <button
            className={activeTab === "empresa" ? "active" : ""}
            onClick={() => setActiveTab("empresa")}
          >
            EMPRESA
          </button>
          <button
            className={activeTab === "mision" ? "active" : ""}
            onClick={() => setActiveTab("mision")}
          >
            MISIÓN
          </button>
          <button
            className={activeTab === "vision" ? "active" : ""}
            onClick={() => setActiveTab("vision")}
          >
            VISIÓN
          </button>
        </div>
        <div className="content-wrapper">
          <TransitionGroup className="tab-content">
            <CSSTransition
              key={activeTab}
              timeout={500}
              classNames="tab-content"
            >
              {renderContent()}
            </CSSTransition>
          </TransitionGroup>
          <img
            src={"images/iconoDorado.png"}
            alt="Nuestra Empresa"
            className="content-image"
          />
        </div>
      </div>
    </>
  );
};

export default Informacion;
