import React from "react";
import "./header-pagina.css";

function HeaderPagina(props) {
    const { titulo, imagenFondo } = props;

    const headerStyle = {
        backgroundImage: `url(/images/${imagenFondo})`
    };

    return (
        <div className="header-pagina" style={headerStyle}>
            <h1>{titulo}</h1>
        </div>
    );
};

export default HeaderPagina;