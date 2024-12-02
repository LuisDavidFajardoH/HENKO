import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Navbar from "../navbar/navbar";
import HeaderPagina from "../header-pagina/header-pagina";
import Footer from "../index/footer/footer";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import "./equipo.css";

const teamValues = [
  {
    icon: <GroupIcon fontSize="large" />,
    text: "Colaboración y Trabajo en Equipo.",
  },
  {
    icon: <SchoolIcon fontSize="large" />,
    text: "Capacitación Continua para el Crecimiento Profesional.",
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    text: "Compromiso con la Excelencia y la Confidencialidad.",
  },
  {
    icon: <WorkIcon fontSize="large" />,
    text: "Profesionales Altamente Competentes y Dedicados.",
  },
  {
    icon: <LoyaltyIcon fontSize="large" />,
    text: "Lealtad y Ética en Cada Proyecto.",
  },
];

const Equipo = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/HENKO.ico" type="image/x-icon" />
        <title>Nuestro Equipo - HENKO GKF</title>
        <meta
          name="description"
          content="Conozca al equipo humano de HENKO GKF. Profesionales comprometidos con la excelencia, la confidencialidad y el trabajo en equipo para garantizar su éxito financiero."
        />
        <meta
          name="keywords"
          content="HENKO GKF, nuestro equipo, colaboración, excelencia, capacitación, confidencialidad, lealtad, ética"
        />
      </Helmet>

      <Navbar />
      <HeaderPagina
        titulo="Nuestro Equipo"
        imagenFondo="equipos.jpg"
      />
      <div className="section-background">
        <Container>
          <Box className="team-section">
            <Typography
              variant="h3"
              className="title animate__animated animate__fadeInDown"
              gutterBottom
            >
              Nuestro Equipo
            </Typography>
            <Box className="text-box">
              <Typography
                variant="body1"
                className="text animate__animated animate__fadeInUp"
              >
                En HENKO GKF, nuestro equipo es el motor que impulsa el éxito de
                nuestros clientes. Nos destacamos por trabajar en colaboración,
                manteniendo un compromiso firme con la excelencia, la
                confidencialidad y el desarrollo profesional continuo.
              </Typography>
            </Box>
          </Box>
          <Box className="values-section">
            <Typography
              variant="h4"
              className="title animate__animated animate__fadeInDown"
              gutterBottom
            >
              Nuestros Valores
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {teamValues.map((value, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  key={index}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box className="value-box animate__animated animate__zoomIn">
                    {value.icon}
                    <Typography variant="body1" className="text">
                      {value.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box className="additional-section">
            <Typography
              variant="h5"
              className="title animate__animated animate__fadeInDown"
              gutterBottom
            >
              Conozca a Nuestras Socias Fundadoras
            </Typography>
            <Box className="founders-section">
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <Box className="founder-card">
                    <img
                      src="/images/giovanna-rivera.jpg"
                      alt="Giovanna Rivera Corrales"
                      className="founder-image"
                    />
                    <Typography variant="h6" className="founder-name">
                      Giovanna Rivera Corrales
                    </Typography>
                    <Typography variant="body2" className="founder-role">
                      Socia Fundadora
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <Box className="founder-card">
                    <img
                      src="/images/karen-aguirre.jpg"
                      alt="Karen Aguirre Perdomo"
                      className="founder-image"
                    />
                    <Typography variant="h6" className="founder-name">
                      Karen Aguirre Perdomo
                    </Typography>
                    <Typography variant="body2" className="founder-role">
                      Socia Fundadora
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Equipo;
