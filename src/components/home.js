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
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ marginTop: '10px' }}>
      <Carousel showThumbs={false} selectedItem={activeIndex}>
        <div>
          <div className="image-overlay">
            <img src={myImage1} alt="1" style={{ maxHeight: '650px', maxWidth: '100%' }} />
          </div>
        </div>
        <div>
          <div className="image-overlay">
            <img src={myImage2} alt="2" style={{ maxHeight: '650px', maxWidth: '100%' }} />
          </div>
        </div>
        <div>
          <div className="image-overlay">
            <img src={myImage3} alt="3" style={{ maxHeight: '650px', maxWidth: '100%' }} />
          </div>
        </div>
        <div>
          <div className="image-overlay">
            <img src={myImage4} alt="4" style={{ maxHeight: '650px', maxWidth: '100%' }} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
