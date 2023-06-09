import React from 'react';
import './estilo.css';
import myImage from '../images/logo.png';
import myImaage from '../images/splash.png';
import { Search, Person } from '@mui/icons-material';
import { Grid } from '@material-ui/core'; // Importar el componente Grid de Material-UI

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <ul className="header-content">
              <div className="logo-container">
                <img src={myImage} width={60} height={60} alt="Logo de Amazonía" />
                <img src={myImaage} width={250} height={80} alt="Logo de Amazonía" />
              </div>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="header-icons">
              <Search style={{ color: 'white', marginLeft: '-300%' }} />
              <Person style={{ color: 'white', marginLeft: '100%' }} />
            </div>
          </Grid>
        </Grid>
      </nav>
    </header>
  );
}

export default Header;
