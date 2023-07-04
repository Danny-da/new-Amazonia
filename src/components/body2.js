import { useEffect, useState } from 'react';
import { Fab, Divider, Button, TextField, Box, Typography, CardMedia, Grid, Card, CardContent } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import myImage2 from '../images/telefono.png';
import myImage3 from '../images/play.png';
import myImage4 from '../images/appstore.png';
import myImage5 from '../images/libro.png';
import myImage6 from '../images/c1.png';
import myImage8 from '../images/c3.png';
import myImage9 from '../images/c4.png';
import myImage7 from '../images/c2.png';
import myImage10 from '../images/c5.png';
import myImage11 from '../images/amazonas.jpg';
import { Link } from 'react-router-dom';





const Body2 = () => {
  
  const [showCards, setShowCards] = useState(true);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setShowCards(windowWidth >= 700);
      setShowCarousel(windowWidth < 700);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const parallaxImage = document.getElementById('parallax-image');
    const startingPoint = 6000; // Punto de partida inicial (ajusta este valor según tus necesidades)
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
      {showCards && (
        
        <div className="background-container">
          <Typography className="text" variant="button" style={{fontSize: 'calc(0.7vw + 0.7vh)',}}>
            Especies
          </Typography>
          <Typography className="text" variant="h5" style={{ lineHeight: '1.2', maxHeight: '60px', overflow: 'hidden',fontSize: 'calc(1.2vw + 1.2vh)',fontWeight: 'bold' }}>
            Explora la asombrosa variedad de flora y fauna en la región amazónica
          </Typography>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px',margin:'16px'  }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center" item xs={10} md={8} >
            {/* Primera columna */}
            <Grid item xs={4} sm={4}>
              <Card style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <CardMedia
                    component="img"
                    src={myImage6}
                    alt="Imagen 6"
                    sx={{
                      width: { xs: '160%', sm: '136%', md: '130%', xl: '130%' }
                    }}
                  />
                </div>
                <CardContent style={{ background: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
                  <Typography variant="body1">
                    Nombre / Ncientifico
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Segunda columna */}
            <Grid item xs={4} sm={4}>
              <Card style={{ marginBottom: '15px' }} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <CardMedia
                    component="img"
                    src={myImage7}
                    alt="Imagen 7"
                    style={{ objectFit: 'cover', width: '70%', height: '70%' }}
                  />
                </div>
                <CardContent style={{ background: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
                  <Typography variant="body1">
                    Nombre / Ncientifico
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <CardMedia
                    component="img"
                    src={myImage8}
                    alt="Imagen 8"
                    style={{ objectFit: 'cover', width: '95%', height: '95%' }}
                  />
                </div>
                <CardContent style={{ background: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
                  <Typography variant="body1">
                    Nombre / Ncientifico
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Tercera columna */}
            <Grid item xs={4} sm={4}>
              <Card style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <CardMedia
                    component="img"
                    src={myImage9}
                    alt="Imagen 9"
                    style={{ objectFit: 'cover', width: '120%', height: '120%' }}
                  />
                </div>
                <CardContent style={{ background: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
                  <Typography variant="body1">
                    Nombre / Ncientifico
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <CardMedia
                    component="img"
                    src={myImage10}
                    alt="Imagen 10"
                    style={{ objectFit: 'cover', width: '84%', height: '90%' }}
                  />
                </div>
                <CardContent style={{ background: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
                  <Typography variant="body1">
                    Nombre / Ncientifico
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </div>
          <Box bottom={0} mt={2} style={{ justifyContent:"center"}}>
          <Link to="/Especies">
            <Fab variant="extended" color="primary" aria-label="show more">
              Ver más
              <ChevronRightIcon fontSize="medium" />
            </Fab>
            </Link>
          </Box>
         
          </div>
       
      )}

      {/* Carrusel */}
      {showCarousel && (
        
        <div style={{ textAlign:'center',backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${myImage11})`,
         justifyContent:'center',  backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '630px' }}>
          <Typography style={{ fontSize: '24px',  marginTop: '20px', color:'white' }}>Especies</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center',}}>
        <Divider sx={{ width: '100px', borderWidth: '3px', backgroundColor: '#fff', borderRadius: '4px' }} />
      </Box>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Carousel  swipeable={false} showThumbs={false} autoPlay={true} interval={3000} width={345} infiniteLoop 
          showIndicators={false} >
          <div>
            <img src={myImage6} alt="Imagen 6" />
            <p className="legend">Nombre / Ncientifico</p>
          </div>
          <div>
            <img src={myImage7} alt="Imagen 7" />
            <p className="legend">Nombre / Ncientifico</p>
          </div>
          <div>
            <img src={myImage8} alt="Imagen 8" />
            <p className="legend">Nombre / Ncientifico</p>
          </div>
          <div>
            <img src={myImage9} alt="Imagen 9" />
            <p className="legend">Nombre / Ncientifico</p>
          </div>
          <div>
            <img src={myImage10} alt="Imagen 10" />
            <p className="legend">Nombre / Ncientifico</p>
          </div>
        </Carousel>
        </div >
        <Link to="/Especies">
            <Fab style={{marginBottom:'-45px'}} variant="extended" color="primary" aria-label="show more">
              Ver más
              <ChevronRightIcon fontSize="medium" />
            </Fab>
            </Link>
        </div>
      )}

      {/* Seccion 1 */}
      <Grid container>
        <Grid container spacing={0} alignItems="center" justifyContent="center" item xs={12} md={6}>
          <div style={{margin:'10%' }}>
            <Typography  style={{fontWeight: 'bold', overflow: 'hidden',textAlign:'center', fontSize: 'calc(2.3vw + 2.3vh)', maxWidth: '700px', margin: '0 auto',marginBottom:'5%' }}>
              Tu <span style={{ color: '#ed6c02' }}>guía móvil</span> de especies y pueblos indígenas
            </Typography>
            <Typography variant='h5' style={{textAlign:'center',fontSize: 'calc(1.2vw + 1.2vh)', maxWidth: '600px', margin: '0 auto' }} >
              Amazonia App: Explora, Conecta y Ahorra: Descubre todo el
              contenido desde cualquier lugar con tu smartphone Android y
              consume menos datos.
            </Typography>
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
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0', marginBottom: '7%' }}>
        <Divider sx={{ width: '100px', borderWidth: '3px', backgroundColor: '#8b0000', borderRadius: '4px' }} />
      </Box>

      {/* Seccion 2 */}
      <Grid container>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" item xs={12} md={6}>
          <img src={myImage5} alt="Imagen 1" style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.9))', width: '65%', height: 'auto', }} />
        </Grid>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" item xs={12} md={6}>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 }, textAlign: 'center' }} noValidate autoComplete="off">
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
