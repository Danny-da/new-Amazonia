import React, { useEffect } from 'react';
import { Divider, Button, TextField, Box, Typography, CardMedia, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';
import myImage1 from '../images/amazonas.jpg';
import myImage2 from '../images/telefono.png';
import myImage3 from '../images/play.png';
import myImage4 from '../images/appstore.png';
import myImage5 from '../images/libro.png';
import myImage6 from '../images/c1.jpg';
import myImage7 from '../images/c2.jpg';
import myImage8 from '../images/c3.jpg';
import myImage9 from '../images/c4.jpg';
import myImage10 from '../images/c5.jpg';
import myImage11 from '../images/amazonas.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const useStyles = makeStyles(() => ({
  text: {
    color: '#fff',
    fontSize: '32px',
    marginBottom: '20px',
  },
}));

const Body2 = () => {
  const classes = useStyles();
  const renderCarousel = () => {
    return (
      <Carousel showArrows={true} showThumbs={false} showStatus={false}>
        <div>
          <img src={myImage6} alt="Imagen 6" />
        </div>
        <div>
          <img src={myImage7} alt="Imagen 7" />
        </div>
        <div>
          <img src={myImage8} alt="Imagen 8" />
        </div>
        <div>
          <img src={myImage9} alt="Imagen 9" />
        </div>
        <div>
          <img src={myImage10} alt="Imagen 10" />
        </div>
      </Carousel>
    );
  };

  useEffect(() => {
    const parallaxImage = document.getElementById('parallax-image');
    const startingPoint = 500; // Punto de partida inicial (ajusta este valor según tus necesidades)
    const maxScroll = 1000; // Límite máximo de desplazamiento (ajusta este valor según tus necesidades)

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrolled = (scrollTop - startingPoint) * -1;

      if (scrolled < maxScroll) {
        parallaxImage.style.transform = `translateY(${scrolled * 0}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div>
      {/* Seccion de Especies */}
      <Box className={`section ${classes.section}`}>
        <div className="overlay"></div>
        <img className={`image ${classes.image}`} src={myImage11} alt="Amazonas" />
        <Typography className="text" variant="h7">
          Especies
        </Typography>

        <Grid container spacing={2} alignItems="center" justifyContent="center" item xs={12} md={8} style={{ marginTop: '30px', position: 'absolute' }}>
          {/* Primera columna */}
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              src={myImage6}
              alt="Imagen 6"
              height={620}
              width={400}
              style={{ marginBottom: '1px' }}
            />
          </Grid>

          {/* Segunda columna */}
          <Grid item xs={6} sm={4}>
            <CardMedia
              component="img"
              src={myImage7}
              alt="Imagen 7"
              height={300}

              style={{ marginBottom: '19px' }}
            />
            <CardMedia
              component="img"
              src={myImage8}
              alt="Imagen 8"
              height={300}
              style={{ marginBottom: '1px' }}
            />
          </Grid>

          {/* Tercera columna */}
          <Grid item xs={6} sm={4}>
            <CardMedia
              component="img"
              src={myImage9}
              alt="Imagen 9"
              height={300}
              style={{ marginBottom: '19px' }}
            />
            <CardMedia
              component="img"
              src={myImage10}
              alt="Imagen 10"
              height={300}
              style={{ marginBottom: '1px' }}
            />
          </Grid>
        </Grid>
        

      </Box>




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
