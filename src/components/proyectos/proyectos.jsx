import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import HeaderPagina from "../header-pagina/header-pagina";
import BotonWhatsapp from "../index/boton-whatsapp/boton-whatsapp";
import Footer from "../index/footer/footer";
import { Helmet } from "react-helmet";
import "./proyectos.css";
import PlantillaProyecto from "./plantilla-proyecto/plantilla-proyecto";

const Proyectos = () => {
  const [filter, setFilter] = useState("todos");
  const [resetKey, setResetKey] = useState(0);

  const proyectos = [
    {
      titulo: "Gabinete para Telecomunicaciones",
      portada: "images/1.4 GABINETE TELECOMUNICACIONES.png",
      descripcion: "Gabinete de diferentes dimensiones (alto, ancho y largo) para usos como disposición de tecnologías para telecomunicaciones a la intemperie. Cuenta con IP65.",
      imagen1: "images/1.1 GABINETE TELECOMUNICACIONES.png",
      imagen2: "images/1.2 GABINETE TELECOMUNICACIONES.png",
      imagen3: "images/1.3 GABINETE TELECOMUNICACIONES.png",
      imagen4: "images/1.4 GABINETE TELECOMUNICACIONES.png",
      categoria: "gabinetes"
    },
    {
      titulo: "Escalera Tipo Avión",
      portada: "images/2.1 ESCALERA TIPO AVION.png",
      descripcion: "Escaleras de trabajo en sitios de tipo bodegaje y/o para realización de mantenimientos a determinadas alturas. Permite su desplazamiento y ubicación según se necesite.",
      imagen1: "images/2.1 ESCALERA TIPO AVION.png",
      imagen2: "images/2.2 ESCALERA TIPO AVION.png",
      imagen3: "images/2.3 ESCALERA TIPO AVION.png",
      imagen4: "images/2.4 ESCALERA TIPO AVION.png",
      categoria: "escaleras"
    },
    {
      titulo: "Escalera Tipo Gato",
      portada: "images/3.2 ESCALERA TIPO GATO.png",
      descripcion: "Escaleras cuya mayor ventaja es la optimización del espacio horizontal, entre otras. Cuenta con guardas que permiten la postura de líneas de vida, según la norma lo requiere.",
      imagen1: "images/3.1 ESCALERA TIPO GATO.png",
      imagen2: "images/3.2 ESCALERA TIPO GATO.png",
      imagen3: "images/3.3 ESCALERA TIPO GATO.png",
      imagen4: "images/3.4 ESCALERA TIPO GATO.png",
      categoria: "escaleras"
    },
    {
      titulo: "Escalera Caracol",
      portada: "images/4.1 ESCALERA CARACOL.png",
      descripcion: "Escalera con gran sentido estético, ideal para el aprovechamiento de espacios reducidos. Cuenta con guardas laterales, así como puertas de acceso y salida.",
      imagen1: "images/4.1 ESCALERA CARACOL.png",
      imagen2: "images/4.2 ESCALERA CARACOL.png",
      imagen3: "images/4.3 ESCALERA CARACOL.png",
      imagen4: "images/4.4 ESCALERA CARACOL.png",
      categoria: "escaleras"
    },
    {
      titulo: "Escalera Plataforma",
      portada: "images/5.1 ESCALERA PLATAFORMA.png",
      descripcion: "Estructura pesada que permite el ingreso a superficies elevadas. Ideal para la realización y subida de maquinaria y equipos pesados, debido a su estructura y alta resistencia mecánica.",
      imagen1: "images/5.1 ESCALERA PLATAFORMA.png",
      imagen2: "images/5.2 ESCALERA PLATAFORMA.png",
      imagen3: "images/5.3 ESCALERA PLATAFORMA.png",
      imagen4: "images/5.4 ESCALERA PLATAFORMA.png",
      categoria: "escaleras"
    },
    {
      titulo: "Mueble Porta Herramientas",
      portada: "images/6.1 MUEBLE PORTA HERRAMIENTAS.png",
      descripcion: "Gabinete con divisiones ecualizables y deslizantes, que permiten el almacenaje de herramentales, moldes y dispositivos de peso.",
      imagen1: "images/6.1 MUEBLE PORTA HERRAMIENTAS.png",
      imagen2: "images/6.2 MUEBLE PORTA HERRAMIENTAS.png",
      imagen3: "images/6.3 MUEBLE PORTA HERRAMIENTAS.png",
      imagen4: "images/6.4 MUEBLE PORTA HERRAMIENTAS.png",
      categoria: "muebles"
    },
    {
      titulo: "Poste Auxilio Vía",
      portada: "images/7.1 POSTE AUXILIO VIA.png",
      descripcion: "Estructura vertical con altos índices de protección a la intemperie (aguas, vientos), permitiendo su instalación en distintos puntos de la vía garantizando el cuidado de las tecnologías internas.",
      imagen1: "images/7.1 POSTE AUXILIO VIA.png",
      imagen2: "images/7.2 POSTE AUXILIO VIA.png",
      imagen3: "images/7.3 POSTE AUXILIO VIA.png",
      imagen4: "images/7.4 POSTE AUXILIO VIA.png",
      categoria: "equipos_especializados"
    },
    {
      titulo: "Mueble Locker de 10 Divisiones",
      portada: "images/8.1 LOCKER 10 DIVISIONES.png",
      descripcion: "Gabinete de distintas dimensiones, que permite el almacenaje de insumos y EPPS, según se requiera.",
      imagen1: "images/8.1 LOCKER 10 DIVISIONES.png",
      imagen2: "images/8.2 LOCKER 10 DIVISIONES.png",
      imagen3: "images/8.3 LOCKER 10 DIVISIONES.png",
      imagen4: "images/8.4 LOCKER 10 DIVISIONES.png",
      categoria: "muebles"
    },
    {
      titulo: "Torre Telescópica",
      portada: "images/9.1 TORRE TELESCOPICA.png",
      descripcion: "Estructura de altitud modificable que permite la postura y transporte de gabinetes, antenas, mástiles y tecnologías para telecomunicaciones.",
      imagen1: "images/9.1 TORRE TELESCOPICA.png",
      imagen2: "images/9.2 TORRE TELESCOPICA.png",
      imagen3: "images/9.3 TORRE TELESCOPICA.png",
      imagen4: "images/9.4 TORRE TELESCOPICA.png",
      categoria: "equipos_especializados"
    },
    {
      titulo: "Soporte Estructura Poste",
      portada: "images/10.1 SOPORTE ESTRUCTURA POSTE.png",
      descripcion: "Base en perfil estructural y ajustable, ideal para la colocación y sostén de antenas, parales y postes.",
      imagen1: "images/10.1 SOPORTE ESTRUCTURA POSTE.png",
      imagen2: "images/10.2 SOPORTE ESTRUCTURA POSTE.png",
      imagen3: "images/10.3 SOPORTE ESTRUCTURA POSTE.png",
      imagen4: "images/10.4 SOPORTE ESTRUCTURA POSTE.png",
      categoria: "soportes"
    },
    {
      titulo: "Soporte Mástil Rotatorio",
      portada: "images/11.1 SOPORTE MASTIL.png",
      descripcion: "Estructura con base de asentamiento rotatoria y mordazas de aseguramiento que permiten una disposición de 360° de cualquier estructura o mástil.",
      imagen1: "images/11.1 SOPORTE MASTIL.png",
      imagen2: "images/11.2 SOPORTE MASTIL.png",
      imagen3: "images/11.3 SOPORTE MASTIL.png",
      imagen4: "images/11.4 SOPORTE MASTIL.png",
      categoria: "soportes"
    },
    {
      titulo: "Soporte Anclado 2 Ejes",
      portada: "images/12.1 SOPORTE ANCLADO 2 EJES.png",
      descripcion: "Dispositivo que permite la postura y movilidad de accesorios, tecnologías y aditamentos, para una interacción ergonómica con el usuario. Cuenta con 2 grados de libertad.",
      imagen1: "images/12.1 SOPORTE ANCLADO 2 EJES.png",
      imagen2: "images/12.2 SOPORTE ANCLADO 2 EJES.png",
      imagen3: "images/12.3 SOPORTE ANCLADO 2 EJES.png",
      imagen4: "images/12.4 SOPORTE ANCLADO 2 EJES.png",
      categoria: "soportes"
    },
    {
      titulo: "Soporte Anclaje Pequeño",
      portada: "images/13.1 SOPORTE ANCLAJE PEQUENO.png",
      descripcion: "Dispositivo de anclaje que permite, con sus mordazas de graduación, ajustar y asegurar cualquier dispositivo de mediano tamaño.",
      imagen1: "images/13.1 SOPORTE ANCLAJE PEQUENO.png",
      imagen2: "images/13.2 SOPORTE ANCLAJE PEQUENO.png",
      imagen3: "images/13.3 SOPORTE ANCLAJE PEQUENO.png",
      imagen4: "images/13.4 SOPORTE ANCLAJE PEQUENO.png",
      categoria: "soportes"
    },
    {
      titulo: "Estantería Rack Pesado",
      portada: "images/14.1 ESTANTERIA TIPO RACK PESADO.png",
      descripcion: "Estructura con entrepaños de altura graduables, para disposición de elementos de gran peso (moldes, herramentales, diferenciales).",
      imagen1: "images/14.1 ESTANTERIA TIPO RACK PESADO.png",
      imagen2: "images/14.2 ESTANTERIA TIPO RACK PESADO.png",
      imagen3: "images/14.3 ESTANTERIA TIPO RACK PESADO.png",
      imagen4: "images/14.4 ESTANTERIA TIPO RACK PESADO.png",
      categoria: "muebles"
    },
    {
      titulo: "Mueble para Herramientas Molde",
      portada: "images/15.4 MUEBLE HERRAMENTALES MOLDE.png",
      descripcion: "Gabinete de dimensiones distintas, y con bandejas en disposición para pronto acceso de herramentales, ideal para maquinaria CNC, Moldes y máquinas con tooling de pronto cambio.",
      imagen1: "images/15.1 MUEBLE HERRAMENTALES MOLDE.png",
      imagen2: "images/15.2 MUEBLE HERRAMENTALES MOLDE.png",
      imagen3: "images/15.3 MUEBLE HERRAMENTALES MOLDE.png",
      imagen4: "images/15.4 MUEBLE HERRAMENTALES MOLDE.png",
      categoria: "muebles"
    },
    {
      titulo: "Guarda Inoxidable para Transportadoras",
      portada: "images/16.1 GUARDAS INOX BANDAS TRANSPORTADORAS.png",
      descripcion: "Guarda, en acero inoxidable, que ofrece protección tanto del operario como de la maquinaria y los productos, con puntos de anclaje según la necesidad y la restricción que corresponda.",
      imagen1: "images/16.1 GUARDAS INOX BANDAS TRANSPORTADORAS.png",
      imagen2: "images/16.2 GUARDAS INOX BANDAS TRANSPORTADORAS.png",
      imagen3: "images/16.3 GUARDAS INOX BANDAS TRANSPORTADORAS.png",
      imagen4: "images/16.4 GUARDAS INOX BANDAS TRANSPORTADORAS.png",
      categoria: "guardas"
    },
    {
      titulo: "Guarda Enmallado Maquinaria",
      portada: "images/17.4 GUARDA ENMALLADO MAQUINARIA.png",
      descripcion: "Guardas con enmallado de distintas distribuciones, ideal para la protección de los elementos de máquinas, pero que permite la visibilidad de la operación de las mismas.",
      imagen1: "images/17.1 GUARDA ENMALLADO MAQUINARIA.png",
      imagen2: "images/17.2 GUARDA ENMALLADO MAQUINARIA.png",
      imagen3: "images/17.3 GUARDA ENMALLADO MAQUINARIA.png",
      imagen4: "images/17.4 GUARDA ENMALLADO MAQUINARIA.png",
      categoria: "guardas"
    },
    {
      titulo: "Guarda Inoxidable para Alimentación",
      portada: "images/18.2 GUARDAS INOX BANDA ALIMENTADORA.png",
      descripcion: "Guarda, en acero inoxidable, y con geometrías particulares, ideal para espacios confinados y garantizando una mayor protección del producto a la salida de bandas.",
      imagen1: "images/18.1 GUARDAS INOX BANDA ALIMENTADORA.png",
      imagen2: "images/18.2 GUARDAS INOX BANDA ALIMENTADORA.png",
      imagen3: "images/18.3 GUARDAS INOX BANDA ALIMENTADORA.png",
      imagen4: "images/18.4 GUARDAS INOX BANDA ALIMENTADORA.png",
      categoria: "guardas"
    },
    {
      titulo: "Guarda Maquinaria Rotativa",
      portada: "images/19.4 GUARDA MAQUINA ROTATIVA.png",
      descripcion: "Guarda, con tapa de acceso lateral, para máquinas o dispositivos que requieran salidas .",
      imagen1: "images/19.1 GUARDA MAQUINA ROTATIVA.png",
      imagen2: "images/19.2 GUARDA MAQUINA ROTATIVA.png",
      imagen3: "images/19.3 GUARDA MAQUINA ROTATIVA.png",
      imagen4: "images/19.4 GUARDA MAQUINA ROTATIVA.png",
      categoria: "guardas"
    },
    {
      titulo: "Guarda Inoxidable Motor Correa",
      portada: "images/20.2 GUARDA INOX MOTOR CON CORREA.png",
      descripcion: "Guarda, en acero inoxidable, para motores y correas con transmisión de potencia, permitiendo la seguridad del operario (impidiendo que haya acceso).",
      imagen1: "images/20.1 GUARDA INOX MOTOR CON CORREA.png",
      imagen2: "images/20.2 GUARDA INOX MOTOR CON CORREA.png",
      imagen3: "images/20.3 GUARDA INOX MOTOR CON CORREA.png",
      imagen4: "images/20.4 GUARDA INOX MOTOR CON CORREA.png",
      categoria: "guardas"
    },
    {
      titulo: "Mueble con Bandejas Deslizante y Cajones",
      portada: "images/21.2 MUEBLE CON BANDEJA DESLIZANTE Y CAJONES.png",
      descripcion: "Mueble tipo mesa de trabajo, con cajones y bandejas deslizantes, que permite el trabajo en talleres o puestos satélites de trabajo. Permite almacenamiento de herramentales.",
      imagen1: "images/21.1 MUEBLE CON BANDEJA DESLIZANTE Y CAJONES.png",
      imagen2: "images/21.2 MUEBLE CON BANDEJA DESLIZANTE Y CAJONES.png",
      imagen3: "images/21.3 MUEBLE CON BANDEJA DESLIZANTE Y CAJONES.png",
      imagen4: "images/21.4 MUEBLE CON BANDEJA DESLIZANTE Y CAJONES.png",
      categoria: "muebles"
    },
    {
      titulo: "Plataforma para Nivel Máquinas",
      portada: "images/22.1 PLATAFORMAS PARA NIVEL MAQUINARIA.png",
      descripcion: "Plataforma, en lámina alfajor, ideal para garantizar protección y nivel para el trabajo en máquinas",
      imagen1: "images/22.1 PLATAFORMAS PARA NIVEL MAQUINARIA.png",
      imagen2: "images/22.2 PLATAFORMAS PARA NIVEL MAQUINARIA.png",
      imagen3: "images/22.1 PLATAFORMAS PARA NIVEL MAQUINARIA.png",
      imagen4: "images/22.2 PLATAFORMAS PARA NIVEL MAQUINARIA.png",
      categoria: "proteccion"
    },
    {
      titulo: "Tolva de Alimentación",
      portada: "images/23.2 TOLVA DE ALIMENTACION.png",
      descripcion: "Estructura en lámina de distintos calibres, ideal para enrrutar alimentación y salida de elementos, productos, partes o maquila.",
      imagen1: "images/23.1 TOLVA DE ALIMENTACION.png",
      imagen2: "images/23.2 TOLVA DE ALIMENTACION.png",
      imagen3: "images/23.3 TOLVA DE ALIMENTACION.png",
      imagen4: "images/23.4 TOLVA DE ALIMENTACION.png",
      categoria: "equipos_especializados"
    },
    {
      titulo: "Tobogán Inoxidable de Salida Banda",
      portada: "images/24.1 TOBOGAN INOX DE GUIA SALIDA.png",
      descripcion: "Guarda en acero inoxidable, que permite la conexión y/o salida de productos entre bandas de alimentación",
      imagen1: "images/24.1 TOBOGAN INOX DE GUIA SALIDA.png",
      imagen2: "images/24.2 TOBOGAN INOX DE GUIA SALIDA.png",
      imagen3: "images/24.3 TOBOGAN INOX DE GUIA SALIDA.png",
      imagen4: "images/24.4 TOBOGAN INOX DE GUIA SALIDA.png",
      categoria: "guardas"
    },

    {
      titulo: "Brackets Traga Moneda",
      portada: "images/25.1 BRACKETS TRAGA MONEDA.png",
      descripcion: "Los *Brackets Traga Moneda* son soportes metálicos utilizados en las máquinas tragamonedas. Su función principal es mantener en su lugar los componentes internos, como los rodillos y mecanismos de pago, asegurando el correcto funcionamiento de la máquina. Fabricados generalmente de acero, son esenciales para la durabilidad y resistencia del equipo.",
      imagen1: "images/25.1 BRACKETS TRAGA MONEDA.png",
      imagen2: "images/25.2 BRACKETS TRAGA MONEDA.png",
      imagen3: "images/25.3 BRACKETS TRAGA MONEDA.png",
      imagen4: "images/25.4 BRACKETS TRAGA MONEDA.png",
      imagen5: "images/25.5 BRACKETS TRAGA MONEDA.png",
      imagen6: "images/25.6 BRACKETS TRAGA MONEDA.png",
      imagen7: "images/25.7 BRACKETS TRAGA MONEDA.png",
      categoria: "frontales"
    },

    {
      titulo: "Brackets Tec Gem",
      portada: "images/26.1 BRACKETS TEC GM.png",
      descripcion: "Los Brackets Tec Gem son soportes metálicos diseñados específicamente para aplicaciones industriales, como en sistemas de montaje o estructuras de soporte. Son conocidos por su precisión y resistencia, lo que los hace ideales para ensamblajes que requieren estabilidad y durabilidad. Estos brackets suelen estar fabricados en acero inoxidable u otras aleaciones de alta resistencia, asegurando un rendimiento óptimo en entornos exigentes.",
      imagen1: "images/26.1 BRACKETS TEC GM.png",
      imagen2: "images/26.2 BRACKETS TEC GM.png",
      imagen3: "images/26.3 BRACKETS TEC GM.png",
      imagen4: "images/26.4 BRACKETS TEC GM.png",
      categoria: "frontales"
    },

    {
      titulo: "Soporte en U",
      portada: "images/27.1 SOPORTE EN U.png",
      descripcion: "El Soporte en U es una pieza metálica con forma de U utilizada para fijar y asegurar tuberías, cables u otros componentes en su lugar. Es común en instalaciones eléctricas y de fontanería.",
      imagen1: "images/27.1 SOPORTE EN U.png",
      imagen2: "images/27.2 SOPORTE EN U.png",
      imagen3: "images/27.3 SOPORTE EN U.png",
      imagen4: "images/27.4 SOPORTE EN U.png",
      categoria: "soportes"
    },

    {
      titulo: "Guardacople",
      portada: "images/28.1 GUARDACOPLE.png",
      descripcion: "Guarda en acero inoxidable, que permite la conexión y/o salida de productos entre bandas de alimentación",
      imagen1: "images/28.1 GUARDACOPLE.png",
      imagen2: "images/28.2 GUARDACOPLE.png",
      imagen3: "images/28.3 GUARDACOPLE.png",
      imagen4: "images/28.4 GUARDACOPLE.png",
      categoria: "guardas"
    },

    {
      titulo: "Bandeja Punzonado",
      portada: "images/29.1 BANDEJA PUNZONADO.png",
      descripcion: "El Guardacople es una cubierta protectora que se utiliza para envolver y proteger los acoples de maquinaria, evitando daños y garantizando la seguridad operativa al prevenir el contacto con partes móviles.",
      imagen1: "images/29.1 BANDEJA PUNZONADO.png",
      imagen2: "images/29.2 BANDEJA PUNZONADO.png",
      imagen3: "images/29.3 BANDEJA PUNZONADO.png",
      imagen4: "images/29.4 BANDEJA PUNZONADO.png",
      categoria: "soportes"
    },
    {
      titulo: "Base Estructural",
      portada: "images/30.1 BASE ESTRUCTURAL.png",
      descripcion: "La Base Estructural es el componente de soporte principal en una estructura, diseñado para distribuir cargas y proporcionar estabilidad a toda la construcción. Es esencial para garantizar la integridad y resistencia del ensamblaje.",
      imagen1: "images/30.1 BASE ESTRUCTURAL.png",
      imagen2: "images/30.2 BASE ESTRUCTURAL.png",
      imagen3: "images/30.3 BASE ESTRUCTURAL.png",
      imagen4: "images/30.4 BASE ESTRUCTURAL.png",
      categoria: "soportes"
    }

  ];

  const filteredProyectos = filter === "todos" ? proyectos : proyectos.filter(proyecto => proyecto.categoria === filter);
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setResetKey(prevKey => prevKey + 1);
  };

  return (
    <>
      <Helmet>
        <link rel="icon" href="/images/HENKO.ico" type="image/x-icon" />
        <title>Proyectos - HENKO | Soluciones Industriales Innovadoras</title>
        <meta
          name="description"
          content="Explora nuestra galería de proyectos en HENKO. Descubre nuestras soluciones industriales personalizadas, incluyendo escaleras, guardas, gabinetes y equipos especializados."
        />
        <meta
          name="keywords"
          content="HENKO, proyectos industriales, escaleras industriales, guardas de seguridad, gabinetes industriales, soportes metálicos, equipos especializados, soluciones metalmecánicas, fabricación industrial, diseño industrial, muebles industriales, estructuras metálicas"
        />
      </Helmet>
      <Navbar />
      <HeaderPagina titulo="Proyectos" imagenFondo="Proyectos.jpg" />
      <div className="proyectos-pagina">
        <div className="proyectos-container">
          <h2>ALGUNOS DE NUESTROS PROYECTOS</h2>
          <div className="filter-buttons">
            <button onClick={() => handleFilterChange("todos")} className={filter === "todos" ? "active" : ""}>Todos</button>
            <button onClick={() => handleFilterChange("escaleras")} className={filter === "escaleras" ? "active" : ""}>Escaleras</button>
            <button onClick={() => handleFilterChange("muebles")} className={filter === "muebles" ? "active" : ""}>Muebles</button>
            <button onClick={() => handleFilterChange("gabinetes")} className={filter === "gabinetes" ? "active" : ""}>Gabinetes</button>
            <button onClick={() => handleFilterChange("guardas")} className={filter === "guardas" ? "active" : ""}>Guardas</button>
            <button onClick={() => handleFilterChange("soportes")} className={filter === "soportes" ? "active" : ""}>Soportes y Bases</button>
            <button onClick={() => handleFilterChange("equipos_especializados")} className={filter === "equipos_especializados" ? "active" : ""}>Equipos Especializados</button>
            <button onClick={() => handleFilterChange("proteccion")} className={filter === "proteccion" ? "active" : ""}>Protección</button>
            <button onClick={() => handleFilterChange("frontales")} className={filter === "frontales" ? "active" : ""}>Frontales</button> 
          </div>
          <div className="imagenes-proyectos">
            {filteredProyectos.map((proyecto, index) => (
              <PlantillaProyecto
                key={`${index}-${resetKey}`}
                titulo={proyecto.titulo}
                portada={proyecto.portada}
                descripcion={proyecto.descripcion}
                imagen1={proyecto.imagen1}
                imagen2={proyecto.imagen2}
                imagen3={proyecto.imagen3}
                imagen4={proyecto.imagen4}
                resetKey={resetKey}
              />
            ))}
          </div>
        </div>
      </div>
      <BotonWhatsapp />
      <Footer />
    </>
  );
};

export default Proyectos;