import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const BotonWhatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="573112897588"
      accountName="MIND"
      avatar="images/mind l.png"
      statusMessage="En línea"
      chatMessage="Bienvenido a MIND S.A.S BIC          ¿En qué podemos ayudarte?"
      placeholder="Escribe tu mensaje..."
      darkMode={false}
      allowClickAway={true}
    />
    );
};

export default BotonWhatsapp;