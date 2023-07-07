//import React from 'react';
import './estilo.css';
import { Card, CardContent, Grid, Typography, Fab, Box, Container, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
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
import CustomCard from './CustomCard';


const Body = () => {
  return (
    // <React.Fragment>
      
      <Container fixed>
        <div>
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
                <Grid item xs={4} sm={6} md={6}>
                  <Typography component="div"
                    sx={{ fontSize: 45, fontFamily: 'Poppins', fontWeight: 'bold' }} >
                    AMAZONÍA: Acerca de la guía ilustrada
                  </Typography>
                  <Typography variant="body1" component="div">
                    ¡Bienvenidos a la página web de la guía ilustrada de la Amazonía!
                    uno de los ecosistemas más importantes del planeta, es un tesoro que debemos proteger
                  </Typography>
                    <Typography variant="body1" component="div">
                      Los pueblos indígenas en la Amazonía son clave para la diversidad cultural y el desarrollo sostenible,
                      ya que mantienen sistemas de vida ancestrales en armonía con el medio ambiente.
                    </Typography>
                  
                  <img src={amazo} alt="Logo de Amazonía" id ="amazo-image" />
                  
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.1))', marginBottom: '30px' }}>
                    <CardContent >
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

                  <Card style={{ filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.1))' }}>
                    <CardContent>
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
          <div>

            <h2 style={{ textAlign: 'center' }}>DISTRIBUCIÓN DE ESPECIES</h2>
            <h1 style={{ textAlign: 'center' }}>Distribución de especies y comunidades Indígenas</h1>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0', marginBottom: '50px' }}>
              <Divider sx={{ width: '60px', borderWidth: '3px', backgroundColor: '#8b0000', borderRadius: '4px' }} />
            </Box>
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
          {/* distrubcion Indigenas */}

          <div>
            <h2 style={{ textAlign: 'center', color: '#646464' }}>Pueblos Indígenas</h2>
            <h1 style={{ textAlign: 'center' }}>Descubriendo las raíces indígenas</h1>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0', marginBottom: '50px' }}>
              <Divider sx={{ width: '60px', borderWidth: '3px', backgroundColor: '#8b0000', borderRadius: '4px' }} />
            </Box>


            <Grid container justifyContent="center" >
            <Grid container spacing={0} alignItems="center" justifyContent="center" direction="column" item xs={12} md={6}>
              <CustomCard
                imageSrc={img1}
                title="¿Conoces a la etnia de los
                Achuars?"
                subtitle="El pueblo achuar vive principalmente en el norte del departamento de Loreto, cerca de la frontera con Ecuador. Según el censo de..."
              />

                <CustomCard
                imageSrc={img2}
                title="¿Cónoces la etnia de los
                boras?"
                subtitle="El pueblo bora se ubica en el departamento de Loreto, en el territorio bañado por los ríos Ampiyacu y Yahuasyacu, cerca de la ciudad..."
              />

                <CustomCard
                imageSrc={img3}
                title="¿Conoces la etnia de los
                ticunas?"
                subtitle="El pueblo ticuna se ha asentado en ambas márgenes del río Amazonas y sus afluentes, cerca de la frontera peruana con Colombia..."
              />

              </Grid>

              <Grid container spacing={0} alignItems="center" justifyContent="center" item xs={10} md={6}>
                <img src={map} alt="Logo de Amazonía" style={{ width: '125%'}} />
              </Grid>
              <Box  mt={2} style={{ textAlign: 'center' }}>
                <Link to= "/bodypi">
                  <Fab variant="extended" color="primary" aria-label="show more">
                    Ver más
                    <ChevronRightIcon fontSize="medium" style={{ marginLeft: '5px' }} />
                  </Fab>
                  </Link>
                </Box>
            </Grid>
          </div>

          {/* terminacion de pueblos Indigenas */}
           {/* Separador */}
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0', marginBottom: '5%' }}>
        <Divider sx={{ width: '100px', borderWidth: '3px', backgroundColor: '#8b0000', borderRadius: '4px' }} />
      </Box>
        </div>
      </Container >
  );
}
export default Body;
