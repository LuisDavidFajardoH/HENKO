import React, { useState, useRef, useEffect } from "react";
import "./plantilla-proyecto.css";
import PlantillaCarrusel from "./plantilla-carrusel/plantilla-carrusel";

function PlantillaProyecto(props) {
    const {portada, titulo, descripcion, imagen1, imagen2, imagen3, imagen4,imagen5,imagen6,imagen7, resetKey} = props;
    const [isFlipped, setIsFlipped] = useState(false);
    const [containerHeight, setContainerHeight] = useState('420px');
    const backRef = useRef(null);

    useEffect(() => {
        if (isFlipped && backRef.current) {
            setContainerHeight(`${backRef.current.offsetHeight}px`);
        } else {
            setContainerHeight('420px');
        }
    }, [isFlipped]);

    useEffect(() => {
        setIsFlipped(false);
        setContainerHeight('420px');
    }, [resetKey]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card-proyecto-container" style={{ height: containerHeight }}>
            <div className={`card-proyecto ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-proyecto-front">
                    <h3>{titulo}</h3>
                    <div className="card-proyecto-image-container">
                        <img className="card-proyecto-image" src={portada} alt={titulo}/>
                    </div>
                    <button className="flip-button" onClick={handleFlip}>Ver más</button>
                </div>
                <div className="card-proyecto-back" ref={backRef}>
                    <div className="card-proyecto-back-content">
                        <h3>{titulo}</h3>
                        <div className="carrusel-container">
                            <PlantillaCarrusel
                                imagen1={imagen1}
                                imagen2={imagen2}
                                imagen3={imagen3}
                                imagen4={imagen4}
                                imagen5={imagen5}
                                imagen6={imagen6}
                                imagen7={imagen7}
                                titulo={titulo}
                            />
                        </div>
                        <p>{descripcion}</p>
                        <button className="flip-button" onClick={handleFlip}>Volver</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlantillaProyecto;