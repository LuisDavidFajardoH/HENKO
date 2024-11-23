import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './plantilla-carrusel.css';

function PlantillaCarrusel(props) {
    const {imagen1, imagen2, imagen3, imagen4, titulo} = props;

    return (
        <CarouselProvider
            naturalSlideWidth={280}
            naturalSlideHeight={280}
            totalSlides={4}
            className="carrusel-container"
        >
            <Slider>
                <Slide index={0}><img src={imagen1} alt={titulo} style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Slide>
                <Slide index={1}><img src={imagen2} alt={titulo} style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Slide>
                <Slide index={2}><img src={imagen3} alt={titulo} style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Slide>
                <Slide index={3}><img src={imagen4} alt={titulo} style={{width: '100%', height: '100%', objectFit: 'cover'}} /></Slide>
            </Slider>
            <ButtonBack className="carousel-button back-button">&#10094;</ButtonBack>
            <ButtonNext className="carousel-button next-button">&#10095;</ButtonNext>
        </CarouselProvider>
    );
};

export default PlantillaCarrusel;