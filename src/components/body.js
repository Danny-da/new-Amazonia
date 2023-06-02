import React from 'react';
import { Card, CardContent, Grid, CardMedia, Typography } from '@mui/material';

const Body = () => {
  return (
  <div>
    <h3 style={{textAlign: 'center'}}>Pueblos Indíenas</h3>
    <h1 style={{textAlign: 'center'}}>Descubriendo las ríces indígenas</h1>
  
    <Card style={{width: '552px', height: '223px', marginLeft: '10%'}}>
    <Grid container>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            height="140"
            image="ruta-de-la-imagen.jpg"
            alt="Descripción de la imagen"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="h5" component="div">
              Título de la Card
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contenido de la Card
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>

    <Card style={{width: '552px', height: '223px', marginLeft: '10%', marginTop: '20px'}}>
    <Grid container>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            height="140"
            image="ruta-de-la-imagen.jpg"
            alt="Descripción de la imagen"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="h5" component="div">
              Título de la Card
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contenido de la Card
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>

    <Card style={{width: '552px', height: '223px', marginLeft: '10%', marginTop: '20px'}}>
    <Grid container>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            height="140"
            image="ruta-de-la-imagen.jpg"
            alt="Descripción de la imagen"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="h5" component="div">
              Título de la Card
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contenido de la Card
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    </div>
  );
};

export default Body;
