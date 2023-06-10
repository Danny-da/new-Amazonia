import React from 'react';
import './estilo.css';
import { Card, CardContent, Grid, Typography, Fab, Box, Container } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import img1 from '../images/card.png'
import img2 from '../images/card2.png'
import img3 from '../images/card 3.png'
import map from '../images/mapa.png'
import content from '../images/Content.png'
import grafi from '../images/grafi.png'
import amazo from '../images/amazo.png'

const Body = () => {
  return (
    // <React.Fragment>
    <Container fixed>
      <div>
        <div style={{ marginTop: '5%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <h1 style={{ textAlign: '' }}>AMAZONíA: Acerca de
                  Ia guía ilustrada</h1>
                <p style={{ textAlign: '' }}> Bienvenidos a la página web de la guía ilustrada de la Amazonía! uno
                  de los ecosistemas más importantes del planeta, es un tesoro que
                  debemos proteger.

                  <br />Los pueblos indígenas en la Amazonía son clave para la diversidad
                  cultural y el desarrollo sostenible, ya que mantienen sistemas de vida
                  ancestrales en armonía con el medio ambiente.</p>
                <img src={amazo} alt="Logo de Amazonía" id="amazo-image" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="ca-rd" style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.1))' }}>
                  <CardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Typography variant="h5" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                      <Box mt={2} style={{ marginLeft: '1%' }}>
                        <AutoAwesomeOutlinedIcon fontSize="large" style={{ marginRight: '15px' }} />
                      </Box>
                      Diversidad Impactante en la Amazonía
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ flexGrow: 1, marginLeft: '57px' }}>
                      La guía ilustrada del Instituto de Investigaciones de la Amazonía Peruana muestra la increíble diversidad de especies de flora y fauna en la región. Es una herramienta valiosa para la formación y sensibilización de jóvenes y adultos, tanto dentro como fuera de la Amazonía, debido a su belleza y relevancia impactantes.
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="ca-rd" style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.1))' }}>
                  <CardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Typography variant="h5" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                      <Box mt={2} style={{ marginLeft: '1%' }}>
                        <CheckCircleOutlineIcon fontSize="large" style={{ marginRight: '15px' }} />
                      </Box>
                      Nuestro objetivo
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ flexGrow: 1, marginLeft: '57px' }}>
                      Nuestro objetivo es dar a conocer la importancia de la diversidad biológica y fomentar su protección y respeto. Reconocemos que la degradación y el cambio climático afectan a todos, pero especialmente a las regiones más pobres y a las poblaciones vulnerables que dependen de los recursos naturales para sobrevivir.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>

        {/* <div style={{ marginTop: '-1%' }}>
              <img src={amazo} alt="Logo de Amazonía" id="amazo-image" />
            </div>
          </div> */}
        {/* distribucion especies */}
        <div>
          <br />
          <br />
          <h2 style={{ textAlign: 'center' }}>DISTRIBUCIÓN DE ESPECIES</h2>
          <h1 style={{ textAlign: 'center' }}>Distribución de especies y comunidades Indígenas</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img src={grafi} style={{ width: '100%', marginLeft: '1%' }} alt="Imagen 5" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={content} style={{ width: '100%', marginLeft: '1%' }} alt="Imagen 6" />
            </Grid>
          </Grid>
        </div>
        {/* terminacion de  distrubcion especies */}
        <br />
        {/* distrubcion Indigenas */}

        <div>
          <h2 style={{ textAlign: 'center' }}>Pueblos Indígenas</h2>
          <h1 style={{ textAlign: 'center' }}>Descubriendo las raíces indígenas</h1>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card className="card" style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <img src={img1} alt="Imagen 1" style={{ width: '100%', objectFit: 'cover' }} />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CardContent>
                      <Typography variant="h5" component="div" style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                        ¿Conoces a la etnia de los Achuars?
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{ marginLeft: '10px' }}>
                        El pueblo achuar vive principalmente en el norte del departamento de Loreto, cerca de la frontera con Ecuador. Según el censo de...
                      </Typography>
                      <Box mt={2} style={{ marginLeft: '65%' }}>
                        <Fab variant="extended" size="medium" color="primary">
                          Leer más
                        </Fab>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>

              <Card className="card" style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <img src={img2} alt="Imagen 2" style={{ width: '100%', objectFit: 'cover' }} />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CardContent>
                      <Typography variant="h5" component="div" style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                        ¿Conoces la etnia de los Boras?
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{ marginLeft: '10px' }}>
                        El pueblo bora se ubica en el departamento de Loreto, en el territorio bañado por los ríos Ampiyacu y Yahuasyacu, cerca de la ciudad...
                      </Typography>
                      <Box mt={2} style={{ marginLeft: '65%' }}>
                        <Fab variant="extended" size="medium" color="primary">
                          Leer más
                        </Fab>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>

              <Card className="card" style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <img src={img3} alt="Imagen 3" style={{ width: '100%', objectFit: 'cover' }} />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CardContent>
                      <Typography variant="h5" component="div" style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                        ¿Conoces la etnia de los Ticunas?
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{ marginLeft: '10px' }}>
                        El pueblo ticuna se ha asentado en ambas márgenes del río Amazonas y sus afluentes, cerca de la frontera peruana con Colombia...
                      </Typography>
                      <Box mt={2} className="button-container text-center">
                        <Fab variant="extended" size="medium" color="primary">
                          Leer más
                        </Fab>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <img src={map} alt="Logo de Amazonía" style={{ width: '100%', objectFit: 'cover' }} />
              <Box mt={2} style={{ textAlign: 'center' }}>
                <Fab variant="extended" color="primary" aria-label="show more">
                  Ver más
                  <ChevronRightIcon fontSize="medium" style={{ marginLeft: '5px' }} />
                </Fab>
              </Box>
            </Grid>
          </Grid>
        </div>

        {/* terminacion de pueblos Indigenas */}

      </div>
    </Container >
    // </React.Fragment >
  );
};

export default Body;
