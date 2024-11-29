import React from "react";
import "./footer.css";
import { FacebookFill, LinkedinBoxFill, TiktokFill, Envelope, Phone, Location } from 'akar-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <h4>Contáctanos</h4>
          <p>
            <Location strokeWidth={2} size={13} />
            <a href="https://www.google.com/maps/place/HENKO+GKF/" target="_blank" rel="noopener noreferrer">
              Bogotá, Colombia
            </a>
          </p>
          <p>
            <Envelope strokeWidth={2} size={13} />
            <a href="mailto:comercial@henkogkf.com" target="_blank" rel="noopener noreferrer">
              comercial@henkogkf.com
            </a>
          </p>
          <p>
            <Phone strokeWidth={2} size={13} />
            <a href="https://api.whatsapp.com/send/?phone=573003456789" target="_blank" rel="noopener noreferrer">
              (57) 300 345 6789
            </a>
          </p>
        </div>
        <div className="footer-row">
          <h4>Síguenos</h4>
          <div className="red-social">
            <a href="https://www.facebook.com/profile.php?id=61566950528041&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FacebookFill strokeWidth={2} size={28} />
            </a>
            <a href="http://www.linkedin.com/in/henko-gk-finance-sas-9a5a93339" target="_blank" rel="noopener noreferrer">
              <LinkedinBoxFill strokeWidth={2} size={30} />
            </a>
            <a href="https://www.tiktok.com/@henko.gk.finance?_t=8rdYrKcvq4N&_r=1" target="_blank" rel="noopener noreferrer">
              <TiktokFill strokeWidth={2} size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <small>&copy; 2024 <b>HENKO GKF</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
