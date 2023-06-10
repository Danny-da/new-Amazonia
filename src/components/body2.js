import React, { useEffect } from 'react';
import { Divider, Button, TextField, Box } from '@mui/material';
import myImage2 from '../images/telefono.png';
import myImage3 from '../images/play.png';
import myImage4 from '../images/appstore.png';
import myImage5 from '../images/libro.png';
// import myImage6 from '../images/amazonas.jpg';
import Grid from '@material-ui/core/Grid';

const Body2 = () => {
  useEffect(() => {
    const parallaxImage = document.getElementById('parallax-image');
    const startingPoint = 500; // Punto de partida inicial (ajusta este valor según tus necesidades)
    const maxScroll = 1000; // Límite máximo de desplazamiento (ajusta este valor según tus necesidades)

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrolled = (scrollTop - startingPoint) * -1;

      if (scrolled < maxScroll) {
        parallaxImage.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Seccion 1 */}
      <Grid container>
        <Grid container spacing={0} alignItems="center" justifyContent="center" item xs={12} md={6}>
          <div style={{ flexDirection: 'column' }}>
            <h1 style={{ fontSize: 'calc(2.5vw + 2vh)', maxWidth: '100%', textAlign: 'center' }}>
              Tu <span style={{ color: '#ed6c02' }}>guía móvil</span> de<br /> especies y<br /> pueblos indígenas
            </h1>
            <h4 style={{ fontWeight: 'normal', maxWidth: '100%', textAlign: 'center' }}>
              "Amazonia App: Explora, Conecta y Ahorra: Descubre todo el<br />
              contenido desde cualquier lugar con tu smartphone Android y<br />
              consume menos datos".
            </h4>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '2%', marginLeft: '10%' }}>
            <div>
              <img src={myImage3} alt="Play Store" style={{ width: '80%', maxWidth: '100%', height: 'auto' }} />
            </div>
            <div>
              <img src={myImage4} alt="App Store" style={{ width: '80%', maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </Grid>

        <Grid container spacing={0} alignItems="center" justifyContent="center" item xs={12} md={6} style={{ marginTop: '30px' }}>
          <img id="parallax-image" src={myImage2} alt="Teléfono" style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.9))', width: '50%', height: 'auto', maxWidth: '100%' }} />
        </Grid>
      </Grid>

      {/* Separador */}
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0', marginBottom: '50px' }}>
        <Divider sx={{ width: '100px', borderWidth: '3px', backgroundColor: '#8b0000', borderRadius: '4px' }} />
      </Box>

      {/* Seccion 2 */}
      <Grid container>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }} item xs={12} md={6}>
          <img src={myImage5} alt="Imagen 1" style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.9))', width: '60%', height: 'auto' }} />
        </Grid>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" item xs={12} md={6} style={{ marginTop: '50px' }}>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', height: '50px' }, textAlign: 'center' }} noValidate autoComplete="off">
            <h5 style={{ fontWeight: 'normal', textAlign: 'center' }}>FORMULARIO DE CONTACTO</h5>
            <h1 style={{ textAlign: 'center' }}>Ponte en contacto con<br />nosotros</h1>
            <div>
              <TextField id="standard-basic" label="Nombres" variant="standard" />
              <TextField id="standard-basic1" label="Apellidos" variant="standard" />
            </div>
            <div>
              <TextField id="standard-basic" label="Asunto" variant="standard" />
              <TextField id="standard-basic1" label="Correo" variant="standard" />
            </div>
            <div>
              <TextField id="standard-basic" label="Celular" variant="standard" />
            </div>
            <div>
              <Button variant="contained" color="primary">
                Enviar
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body2;
