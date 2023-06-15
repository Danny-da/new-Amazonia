import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../components/Header'
import AboutUs from '../views/Home/AboutUs';
import ChartSpecies from '../views/Home/ChartSpecies';
import DownloadApp from '../views/Home/DownloadApp';
import CarouselSpecies from '../views/Home/CarouselSpecies';
import Footer from '../components/Footer';
// import { Grid } from '@mui/material';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth="lg">       
           <AboutUs/>
           <ChartSpecies/>
      </Container>
           <CarouselSpecies/>
      <Container maxWidth="lg">
      <DownloadApp/>
      </Container>
      <Footer/>
 
    </React.Fragment>
  );
}
