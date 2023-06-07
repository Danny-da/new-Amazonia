import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import myImage1 from '../images/img1.png';
import myImage2 from '../images/img2.png';
import myImage3 from '../images/img3.png';
import myImage4 from '../images/img4.png';
import './estilo.css'; // Importar el archivo de estilos

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="home-container">
      <Carousel showThumbs={false} selectedItem={activeIndex}>
        <div className="image-overlay">
          <div className="carousel-image-container">
            <img src={myImage1} alt="1" className="carousel-image" />
          </div>
        </div>
        <div className="image-overlay">
          <div className="carousel-image-container">
            <img src={myImage2} alt="2" className="carousel-image" />
          </div>
        </div>
        <div className="image-overlay">
          <div className="carousel-image-container">
            <img src={myImage3} alt="3" className="carousel-image" />
          </div>
        </div>
        <div className="image-overlay">
          <div className="carousel-image-container">
            <img src={myImage4} alt="4" className="carousel-image" />
          </div>
        </div>
      </Carousel>
      <div className="content-container">
        <h1 className="title">
          Explora la diversidad oculta de los pueblos indígenas y la vida silvestre
        </h1>
        <p className="description">
          Explora la increíble biodiversidad de Loreto en la Amazonia a través de nuestras guías ilustradas de especies
          animales. Descarga nuestra aplicación móvil y lleva contigo este increíble mundo de conocimiento en tus
          aventuras por la selva amazónica.
        </p>
      </div>
    </div>
  );
};

export default Home;
