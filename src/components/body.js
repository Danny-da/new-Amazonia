import React from 'react';
import './estilo.css';
import { Card, CardContent, Grid, CardMedia, Typography, Fab, Box } from '@mui/material';
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
    <div>
      <div>
        <div style={{ marginTop: '5%' }}>
        <h1 style={{ marginLeft: '10%', marginTop: '-15%' }}>AMAZONíA: Acerca de <br/>
          Ia guía ilustrada</h1>
        <h1 style={{ marginLeft: '10%' }}>Descubriendo las raíces indígenas</h1>
          <Card className="ca-rad" style={{ boxShadow: '-5px 5px 5px 1px  rgba(0, 0, 0, 0.1)',   }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                <Box mt={2} style={{ marginLeft: '1%' }}>
                  <AutoAwesomeOutlinedIcon fontSize="large" style={{ marginRight: '15px'}} />
                </Box>
                Diversidad Impactante en la Amazonía
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ flexGrow: 1, marginLeft: '57px' }}>
                La guía ilustrada del Instituto de Investigaciones de la Amazonía Peruana muestra la increíble diversidad de especies de flora y fauna en la región. Es una herramienta valiosa para la formación y sensibilización de jóvenes y adultos, tanto dentro como fuera de la Amazonía, debido a su belleza y relevancia impactantes.
              </Typography>

            </CardContent>
          </Card>

          

          {/* <div style={{marginLeft: '10%', marginTop:'-5%'}}>
      <h2 style={{marginTop:'-10%' }}>Pueblos Indígenas</h2>
      <h1 style={{ }}>Descubriendo las raíces indígenas</h1>
      </div> */}

          <Card className="ca-rd" style={{ boxShadow: '-5px 5px 5px 1px rgba(0, 0, 0, 0.1)',maginTop:'100px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" component="div" style={{ display: 'flex', alignItems: 'center' }}>
                <Box mt={2} style={{ marginLeft: '1%' }}>
                  <CheckCircleOutlineIcon fontSize="large" style={{ marginRight: '15px' }} />
                </Box>
                Nuestro objetivo
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ flexGrow: 1, marginLeft: '57px' }}>
                Nuestro objetivo es dar a conocer la importancia de la
                diversidad biológica y fomentar su protección y respeto.
                Reconocemos que Ia degradación y el cambio climático
                afectan a todos, pero especialmente a las regiones más
                pobres y a las poblaciones vulnerables que dependen de
                los recursos naturales para sobrevivir.
              </Typography>
            </CardContent>
          </Card>

        </div>

        <div style={{ marginTop: '-1%' }}>
          <img src={amazo} alt="Logo de Amazonía" id="amazo-image" />
        </div>
      </div>
      <div>
        <br />
        <br />
        <h2 style={{ textAlign: 'center' }}>DISTRIBUCIÓN DE ESPECIES</h2>
        <h1 style={{ textAlign: 'center' }}>Distribución de especies y comunidades Indígenas</h1>
        <img src={grafi} style={{ marginLeft: '10%' }} alt="Imagen 5" />
        <img src={content} style={{ marginLeft: '53%', marginTop: '-23%' }} alt="Imagen 6" />
      </div>

      <br />
      <div style={{ padding: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>Pueblos Indígenas</h2>
        <h1 style={{ textAlign: 'center' }}>Descubriendo las raíces indígenas</h1>
        <br />

        <Card className="card" style={{ boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <img src={img1} alt="Imagen 1" />
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
              <img src={img2} alt="Imagen 2" />
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
              <img src={img3} alt="Imagen 3" />
            </Grid>
            <Grid item xs={12} sm={8}>
              <CardContent>
                <Typography variant="h5" component="div" style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                  ¿Conoces la etnia de los Ticunas?
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginLeft: '10px' }}>
                  El pueblo ticuna se ha asentado en ambas márgenes del río Amazonas y sus afluentes, cerca de la frontera peruana con Colombia...
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
          <Fab variant="extended" color="primary" aria-label="show more">
            Ver más
            <ChevronRightIcon fontSize="medium" style={{ marginLeft: '5px' }} />
          </Fab>
        </Box>
      </div>
    </div>
  );
};

export default Body;
