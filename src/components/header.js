import React from 'react';
import './estilo.css';
import myImage from '../images/logo.png';
import myImaage from '../images/splash.png';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header-content">
          <div className="logo-container">
            <img src={myImage} width={60} height={60} alt="Logo de Amazonía" style={{ marginLeft: '-30px' }}/>
            <img src={myImaage} width={250} height={80} alt="Logo de Amazonía" />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;