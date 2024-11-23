import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 4.6254441, lng: -74.0950915 }, // Coordenadas específicas del centro
      zoom: 15,
    });

    const marker = new window.google.maps.Marker({
      position: { lat: 4.6254441, lng: -74.0950915 }, // Coordenadas específicas del marcador
      map,
      title: 'Mind SAS BIC',
    });

    const infowindowContent = `
      <div∫>
        <h3 style="margin: 0 0 10px; font-size: 18px; color: black;">Mind BIC SAS</h3>
        <p style="margin: 0; font-size: 14px;"><strong>Dirección:</strong> Av. de las Américas, Bogotá</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Teléfono:</strong> +57 3112897588</p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:info@metalmindsa.com" style="color: #1a73e8;">contacto@mindsas.com</a></p>
        <p style="margin: 5px 0; font-size: 14px;"><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
        <p style="margin: 5px 0; font-size: 14px;"><a href="https://www.mindsas.com" target="_blank" style="color: #1a73e8;">Visitar sitio web</a></p>
      </div>
    `;

    const infowindow = new window.google.maps.InfoWindow({
      content: infowindowContent,
    });

    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });

    infowindow.open(map, marker); // Muestra el infowindow por defecto
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default Map;
