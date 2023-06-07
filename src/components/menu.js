import React from 'react';
import { Tab, Tabs, Box, Typography } from '@mui/material';
import image1 from '../images/heder.png'

const Menu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const typographyStyles = {
    color: 'white',
    fontSize: '1rem',
    '@media (max-width: 1000px)': {
      fontSize: '0.7rem',
    },
    '@media (max-width: 700px)': {
      fontSize: '0.5rem',
    },

  };
  const containerStyles = {
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  return (
    <Box className="menu-container" >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Menu de pestañas"
        className="menu-tabs"
      >
        <Tab
          label={
            <Box className="menu-tab">
              <Typography sx={typographyStyles}>Aves</Typography>
            </Box>
          }
          className="menu-tab-item"
        />
        <Tab
          label={
            <Box className="menu-tab">
              <Typography sx={typographyStyles}>Mamíferos</Typography>
            </Box>
          }
          className="menu-tab-item"
        />
        <Tab
          label={
            <Box className="menu-tab">
              <Typography sx={typographyStyles}>Reptiles</Typography>
            </Box>
          }
          className="menu-tab-item"
        />
        <Tab
          label={
            <Box className="menu-tab">
              <Typography sx={typographyStyles}>Anfibios</Typography>
            </Box>
          }
          className="menu-tab-item"
        />
        <Tab
          label={
            <Box className="menu-tab">
              <Typography sx={typographyStyles}>Peces</Typography>
            </Box>
          }
          className="menu-tab-item"
        />
        <Tab
          label={
            <Box className="menu-tab">
              <Typography sx={typographyStyles}>Insectos</Typography>
            </Box>
          }
          className="menu-tab-item"
        />
        <Tab
          label={
            <Box className="menu-tab">
              <Typography sx={typographyStyles}>Árboles</Typography>
            </Box>
          }
          className="menu-tab-item"
        />
        <Tab
          label={
            <Box className="menu-tab">
              <Typography sx={typographyStyles}>Palmeras</Typography>
            </Box>
          }
          className="menu-tab-item"
        />
        {/* Resto de las pestañas */}
      </Tabs>
    </Box>
  );
};

export default Menu;
