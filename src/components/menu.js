import React from 'react';
import { Tab, Tabs, Box, Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Menu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ position: 'fixed',top: 0,left: 0,zIndex: 999,
    width: '100%',textAlign:'auto',marginTop:'70px' ,flexGrow: 1, display: 'flex',backdropFilter: 'blur(2px)',
     }}>
      <Tabs value={value} onChange={handleChange} aria-label="Menu de pestañas" sx={{ width: '100%' }}>
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <StarOutlineIcon sx={{color: 'white' ,marginRight: 1 }} />
              <Typography sx={{ color:'white', }} variant="body1">Aves</Typography>
            </Box>
          }
          sx={{ width: '12.5%' }}
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <StarOutlineIcon sx={{color: 'white', marginRight: 1 }} />
              <Typography sx={{ color:'white'}} variant="body1">Mamiferos</Typography>
            </Box>
          }
          sx={{ width: '12.5%' }}
        />
        {/* Resto de las pestañas */}
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <StarOutlineIcon sx={{color: 'white', marginRight: 1 }} />
              <Typography sx={{ color:'white'}} variant="body1">Arboles</Typography>
            </Box>
          }
          sx={{ width: '12.5%' }}
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <StarOutlineIcon sx={{color: 'white', marginRight: 1 }} />
              <Typography sx={{ color:'white'}} variant="body1">Palmeras</Typography>
            </Box>
          }
          sx={{ width: '12.5%' }}
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <StarOutlineIcon sx={{color: 'white', marginRight: 1 }} />
              <Typography sx={{ color:'white'}} variant="body1">Peces</Typography>
            </Box>
          }
          sx={{ width: '12.5%' }}
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <StarOutlineIcon sx={{color: 'white', marginRight: 1 }} />
              <Typography sx={{ color:'white'}} variant="body1">Insectos</Typography>
            </Box>
          }
          sx={{ width: '12.5%' }}
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <StarOutlineIcon sx={{color: 'white', marginRight: 1 }} />
              <Typography sx={{ color:'white'}} variant="body1">Reptiles</Typography>
            </Box>
          }
          sx={{ width: '12.5%' }}
        />
        <Tab
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <StarOutlineIcon sx={{color: 'white', marginRight: 1 }} />
              <Typography sx={{ color:'white'}} variant="body1">Anfibios</Typography>
            </Box>
          }
          sx={{ width: '12.5%' }}
        />
      </Tabs>
    </Box>
  );
};

export default Menu;
