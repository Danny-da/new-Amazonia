import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';
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
      {/* <div>
        <img src={myImage6}/>
      </div> */}
      <div style={{ marginTop: '5%', display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ marginLeft: '13%', fontSize: 'calc(2.5vw + 2vh)', maxWidth: '75%' }}>
            Tu <span style={{ color: '#ed6c02' }}>guía móvil</span> de<br /> especies y<br /> pueblos indígenas
          </h1>
          
          <h4 style={{ marginLeft: '13%', fontWeight: 'normal', maxWidth: '90%' }}>
            "Amazonia App: Explora, Conecta y Ahorra: Descubre todo el<br />
            contenido desde cualquier lugar con tu smartphone Android y<br />
            consume menos datos".
          </h4>

          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '2%', marginLeft:'10%' }}>
            <div style={{ marginRight: '5%' }}>
              <img src={myImage3} alt="Play Store" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div>
              <img src={myImage4} alt="App Store" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>

        <div style={{ marginRight: '5%', marginTop: '2%', width: '25%' }}>
          <img id="parallax-image" src={myImage2} alt="Teléfono" style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.9))', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', margin: '0 auto' }}>
  <img src={myImage5} alt="Imagen 1" style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.9))', width: '30%', height: 'auto', marginRight: '50px'}} />
  
  <form style={{ width: '50%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <h5 style={{ fontWeight: 'normal' }}>FORMULARIO DE CONTACTO</h5>
    <h1>Ponte en contacto con<br />nosotros</h1>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="Nombres" variant="standard" />
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="Correo" variant="standard" />
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="Asunto" variant="standard" />
      </Grid>
      <Grid item xs={6}>
        <TextField id="standard-basic" label="Apellidos" variant="standard" />
      </Grid>
      <Grid item xs={10}>
        <TextField id="standard-basic" label="Celular" variant="standard" fullWidth />
      </Grid>
    </Grid>
    <Button style={{ backgroundColor: '#0086b7' }} variant="contained" color="primary">
      Enviar
    </Button>
  </form>
</div>






    </div>
  );
}

export default Body2;
