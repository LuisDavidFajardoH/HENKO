import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const BotonWhatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="573112397588"
      accountName="HENKO GKF"
      avatar="images/forma1 dorado.png"
      statusMessage="En línea"
      chatMessage="Bienvenido a Henko GFK          ¿En qué podemos ayudarte?"
      placeholder="Escribe tu mensaje..."
      darkMode={true}
      allowClickAway={true}
    />
    );
};

export default BotonWhatsapp;