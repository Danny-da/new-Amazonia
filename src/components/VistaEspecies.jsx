import { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@material-ui/core';
import './estilo.css';
import myImage11 from '../images/amazonas.jpg';

const VistaEspecies = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://amazonia.iiap.org.pe/movil/tipo/');
        const jsonData = await response.json();
        setData(jsonData.especies);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     
          <div style={{ display:'flex', flexDirection: 'column',backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${myImage11})`,
         justifyContent:'center', backgroundSize: 'cover', minHeight: '300px', paddingLeft: '50px', alignItems: 'flex-start'  }}> 

          <Typography  className="text" variant="h3">
            Especies
          </Typography>
          <Box className="links">
          <Typography  className="text" variant="h6">
            <a style={{color:'#a4a59c'}} href="/">⌂ Home</a> / <a style={{color:'white'}} href="/especies">✩ Especies</a>
          </Typography>
        </Box>
        </div>
      
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        item
        xs={12}
        md={12}
      >
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="cardd">
              <CardContent className="cardContentt">
                <Typography variant="h5" component="div">
                  {item.nombre}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {item.ncientifico}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VistaEspecies;
