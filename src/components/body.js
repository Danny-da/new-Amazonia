import React from 'react';
import './estilo.css';
import { Card, CardContent, Grid, CardMedia, Typography, Fab, Box } from '@mui/material';
import img1 from '../images/card.png'
import img2 from '../images/card2.png'
import img3 from '../images/card 3.png'
import map from '../images/mapa.png'

const Body = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h2 style={{ textAlign: 'center' }}>Pueblos Indíenas</h2>
      <h1 style={{ textAlign: 'center' }}>Descubriendo las ríces indígenas</h1>
      <br />
      <div />
      <Card style={{ width: '552px', height: '223px', marginLeft: '10%', marginTop: '20px', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <img src={img1} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="div" style={{ marginLeft: '10px',  fontWeight: 'bold' }}>
                ¿Conoces a la etnia de los Achuars?
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginLeft: '10px' }}>
                El pueblo achuar vive principalmente en el norte del departamento de Loreto, cerca de la frontera con Ecuador. Según el censo de...
              </Typography>
              <Box mt={2} style={{  marginLeft: '65%'}}>
                <Fab variant="extended" size="medium" color="primary">
                  Leer más
                </Fab>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <Card style={{ width: '552px', height: '223px', marginLeft: '10%', marginTop: '20px', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            {/* <CardMedia
          img src={img1}
           
          /> */}
            <img src={img2} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="div" style={{ marginLeft: '10px',  fontWeight: 'bold' }}>
                ¿Cónoces la etnia de los boras?
              </Typography>
              <Typography variant="body2" color="text.secondary " style={{ marginLeft: '10px' }}>
                El pueblo bora se ubica en el departamento de Loreto, en el territorio bañado por los ríos Ampiyacu y Yahuasyacu, cerca de la ciudad...
              </Typography>
              <Box mt={2} style={{  marginLeft: '65%'}}>
                <Fab variant="extended" size="medium" color="primary">
                  Leer más
                </Fab>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <Card className="card" style = {{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <img src={img3} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
              <Typography variant="h5" component="div" style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                ¿Conoces la etnia de los ticunas?
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ marginLeft: '10px'  }}>
                El pueblo ticuna se ha asentado en ambas márgenes del río Amazonas y sus afluentes, cerca de la frontera peruana con Colombia y„.
              </Typography>
              <Box mt={2} className="button-container">
                <Fab variant="extended" size="medium" color="primary">
                  Leer más
                </Fab>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <img src={map} alt="Logo de Amazonía" style={{ width: '68%', marginLeft: "45%", marginTop: '-100%' }} />
      <Box mt={2} style={{ textAlign: 'center' }}>
        <Fab variant="extended" color="primary">
          Ver más 
        </Fab>
      </Box>
    </div>
  );
};

export default Body;
