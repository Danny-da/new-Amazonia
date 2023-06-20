import React, { useState } from 'react';
import { Tab, Tabs, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Menu = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 750);
  };

  // Agregar listener para detectar cambios en el tamaño de la ventana
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const menuItems = ['Aves', 'Mamíferos', 'Reptiles', 'Anfibios', 'Peces', 'Insectos', 'Árboles', 'Palmeras',];

  return (
    <Box className="menu-container">
      {isMobile ? (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          style={{ marginLeft: '5px', color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Menu de pestañas"
          className="menu-tabs"
        >
          {menuItems.map((item, index) => (
            <Tab
              key={index}
              label={
                <Box className="menu-tab">
                  <Typography sx={typographyStyles}>{item}</Typography>
                </Box>
              }
              className="menu-tab-item"
            />
          ))}
        </Tabs>
      )}

      {/* Menú lateral para pantallas móviles */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 200, paddingTop: '70px', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#e9f6f6' }}>
          <List sx={{ flex: '1 1 auto', marginTop: '10px', spacing: 10 }}>
            {menuItems.map((item, index) => (
              <ListItem key={index} sx={{ marginBottom: '17%', textAlign: 'center' }}>
                <ListItemText primary={item} sx={{ color: 'black' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Menu;