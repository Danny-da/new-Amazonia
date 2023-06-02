import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import myImage1 from '../images/img1.png';
import myImage2 from '../images/img2.png';
import myImage3 from '../images/img3.png';
import myImage4 from '../images/img4.png';

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
    <div style={{ marginTop: '10px', position: 'relative' }}>
      <Carousel showThumbs={false} selectedItem={activeIndex}>
        <div>
        <div className="image-overlay">
          <img src={myImage1} alt="1" style={{ maxHeight: '740px', maxWidth: '100%' }} />
        </div>
        </div>
        <div>
        <div className="image-overlay">
          <img src={myImage2} alt="2" style={{ maxHeight: '740px', maxWidth: '100%' }} />
        </div>
        </div>
        <div>
        <div className="image-overlay">
          <img src={myImage3} alt="3" style={{ maxHeight: '740px', maxWidth: '100%' }} />
        </div>
        </div>
        <div>
        <div className="image-overlay">
          <img src={myImage4} alt="4" style={{ maxHeight: '740px', maxWidth: '100%' }} />
        </div>
        </div>
      </Carousel>
      <div style={{ marginTop:'15%',position: 'absolute', top: 0, left:'13%',  width: '100%', textAlign: 'left', color:'white' }}>
        <h1 style={{ fontSize: '50px' }}>Explora la diversidad oculta<br/>
        de los pueblos indígena y<br/> la vida silvestre</h1>
        <p>Explora la increíble biodiversidad de Loreto en la Amazonia a través de nuestra guías<br/> 
        ilustradas de especies animales. Descarga nuestra aplicación móvil.y lleva contigo este<br/> 
        increíble mundo de conocimiento en tus aventuras por la selva amazónica</p>
      </div>
    </div>
  );
};

export default Home;
